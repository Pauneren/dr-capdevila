const nodemailer = require('nodemailer');

function isConfigured(env) {
    return Boolean(env.SMTP_HOST && env.SMTP_PORT && env.SMTP_USER && env.SMTP_PASS && env.TO_EMAIL);
}

function createTransport(env) {
    return nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: Number(env.SMTP_PORT),
        secure: String(env.SMTP_SECURE).toLowerCase() === 'true',
        auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
        },
    });
}

async function sendContactEmail({ to, fromName, fromEmail, message, createdAt, requestId }, env) {
    if (!isConfigured(env)) {
        return { sent: false, error: 'SMTP not configured' };
    }

    const transport = createTransport(env);

    const subject = `New website message from ${fromName}`;
    const text = [
        `Request ID: ${requestId}`,
        `Time: ${createdAt}`,
        `From: ${fromName} <${fromEmail}>`,
        '',
        message,
    ].join('\n');

    const info = await transport.sendMail({
        from: env.SMTP_USER,
        to,
        replyTo: `${fromName} <${fromEmail}>`,
        subject,
        text,
    });

    return { sent: true, messageId: info.messageId };
}

module.exports = {
    sendContactEmail,
};
