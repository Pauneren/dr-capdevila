const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const messagesFile = path.join(dataDir, 'messages.json');

async function ensureDataFile() {
    if (!fs.existsSync(dataDir)) {
        await fsp.mkdir(dataDir, { recursive: true });
    }
    if (!fs.existsSync(messagesFile)) {
        await fsp.writeFile(messagesFile, JSON.stringify({ messages: [] }, null, 2), 'utf8');
    }
}

async function readMessages() {
    await ensureDataFile();
    const raw = await fsp.readFile(messagesFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.messages)) {
        return [];
    }
    return parsed.messages;
}

async function writeAtomic(filePath, contents) {
    const tmpPath = `${filePath}.tmp`;
    await fsp.writeFile(tmpPath, contents, 'utf8');
    await fsp.rename(tmpPath, filePath);
}

async function appendMessage(message) {
    const messages = await readMessages();
    messages.push(message);
    await writeAtomic(messagesFile, JSON.stringify({ messages }, null, 2));
    return message;
}

module.exports = {
    appendMessage,
    readMessages,
};
