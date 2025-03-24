import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config()

const token = process.env.API_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Старт'},
    ])

    bot.on("message", async (message) => {
        const chatId = message.chat.id;
        const text = message.text;

        if (text == '/start') {
            const username = message.chat.username;

            await bot.sendMessage(chatId, `SCL Games Beta? Hello, ${username}`);
            return bot.sendSticker(chatId, 'CAACAgIAAxkBAAEOJFFn4AuWLyWSs-gTO8KM1W2TdLHTcQACIgADTlzSKWF0vv5zFvwUNgQ');
        }

    })


}

start();