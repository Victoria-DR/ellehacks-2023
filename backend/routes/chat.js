const axios = require('axios');

const chat = (req, res, next) => {
  const chatResponse = await axios(
    `https://victoriadarosa.autocode.dev/ellehacks-2023@dev/?userName=${req.body.userFirstName}&userMessage=${req.body.message}`
  );
  res.send(chatResponse);
};

module.exports = chat;
