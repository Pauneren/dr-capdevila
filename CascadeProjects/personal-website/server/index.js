const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const { appendMessage, readMessages } = require('./storage');
const { sendContactEmail } = require('./mailer');

const app = express();

app.use(express.json({ limit: '250kb' }));
app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: false,
    })
);

app.get('/health', (req, res) => {
    res.json({ ok: true });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/api/contact', async (req, res) => {
    try {
        const name = String(req.body?.name || '').trim();
        const email = String(req.body?.email || '').trim();
        const message = String(req.body?.message || '').trim();

        if (!name || name.length > 100) {
            return res.status(400).json({ ok: false, error: 'Name is required (max 100 characters).' });
        }
        if (!email || email.length > 200 || !isValidEmail(email)) {
            return res.status(400).json({ ok: false, error: 'Valid email is required.' });
        }
        if (!message || message.length > 5000) {
            return res.status(400).json({ ok: false, error: 'Message is required (max 5000 characters).' });
        }

        const createdAt = new Date().toISOString();
        const requestId = crypto.randomUUID();

        const stored = await appendMessage({
            id: requestId,
            name,
            email,
            message,
            createdAt,
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null,
            userAgent: req.headers['user-agent'] || null,
        });

        const emailResult = await sendContactEmail(
            {
                to: process.env.TO_EMAIL || 'paula1@ymail.com',
                fromName: name,
                fromEmail: email,
                message,
                createdAt,
                requestId,
            },
            process.env
        );

        res.json({ ok: true, stored: Boolean(stored), email: emailResult });
    } catch (err) {
        res.status(500).json({ ok: false, error: 'Unexpected server error.' });
    }
});

app.get('/api/messages', async (req, res) => {
    const token = String(req.headers['x-admin-token'] || '');
    const expected = String(process.env.ADMIN_TOKEN || '');

    if (!expected) {
        return res.status(403).json({ ok: false, error: 'ADMIN_TOKEN not set on server.' });
    }
    if (!token || token !== expected) {
        return res.status(401).json({ ok: false, error: 'Unauthorized.' });
    }

    const messages = await readMessages();
    res.json({ ok: true, messages });
});

const port = Number(process.env.PORT || 5001);
app.listen(port, () => {
    process.stdout.write(`Server listening on http://localhost:${port}\n`);
});
