require('dotenv').config();

const TelegramApi = require('node-telegram-bot-api');
const triggerMessages = require('./trigger-messages');

const token = process.env.TG_TOKEN;
const bot = new TelegramApi(token, { polling: true });

bot.on('message', msg => {
	const text = msg.text;
	const chatId = msg.chat.id;
	const firstName = msg.from.first_name;
	const lastName = msg.from.last_name;

	if (text === '/start') {
		bot.sendMessage(chatId, `Привет, ${firstName} ${lastName}! Я буду твоим самым верным псом!`);
	}

	if (text === '/info') {
		bot.sendMessage(chatId, `Хочешь узнать меня поближе? Я самый дружелюбный пес, который просто хочет человеческого внимания! Будешь моим хозяином?`);
	}

	if (text === '/call') {
		bot.sendMessage(chatId, 'Призываю своего духа! @duuuuuuuden , явись!');
	}

	if (triggerMessages.includes(text.toLowerCase())) {
		bot.sendMessage(chatId, 'Гав! Слушаюсь!');
	}
});
