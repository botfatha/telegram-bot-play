const axios = require('axios');

module.exports = async (req, res) => {
    const { message } = req.body;

    if (message) {
        const chatId = message.chat.id;
        const text = message.text;

        // When a user sends the "/start" command
        if (text === '/start') {
            const inlineKeyboard = {
                inline_keyboard: [
                    [{
                        text: 'Start',
                        url: 'https://tek-sandy.vercel.app/', // Replace with your Vercel game app URL
                    }],
                ],
            };

            await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
                chat_id: chatId,
                text: 'Welcome! Click Start to play the game.',
                reply_markup: inlineKeyboard,
            });
        }
    }

    res.status(200).send('ok');
};
