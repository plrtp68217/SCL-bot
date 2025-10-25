import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.API_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const stickers = [
    'CAACAgIAAxkBAAEPo2Vo_PO_Gphb7hIJTXy4BxFu0MOpeQACzIQAAraN6EtR-qduDWN52TYE',
    'CAACAgIAAxkBAAEPo2do_PPEGdpL0bi-xO3m8K_qPBTTXwACr4YAAo0b6UsqrZxZs-v9STYE',
    'CAACAgIAAxkBAAEPo2lo_PPIJS-jZyPVh29qm9fQdCmVZgACGY0AAgzR6EvO92q8gxAvwzYE',
    'CAACAgIAAxkBAAEPo2to_PPJ4ijUWkXrsi5-V193b_kQUQAC2n0AAqKn6UvH62XfGjVH7zYE',
]

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Старт'},
    ])

    bot.on("message", async (message) => {
        const chatId = message.chat.id;
        const text = message.text;

        if (text == '/start') {
            const username = message.chat.username;

            await bot.sendMessage(chatId, `SCL Games. Hello, ${username}.`);
            await bot.sendSticker(chatId, stickers[Math.floor(Math.random() * stickers.length)]);
        }
    })
}

start();
