const axios = require('axios');

const chat = async(req, res, next) => {
  const chatResponse = await axios(
    `https://victoriadarosa.autocode.dev/ellehacks-2023@dev/?userName=${req.body.userFirstName}&userMessage=${req.body.message}`
  );
  res.send(chatResponse.data.data);
};

module.exports = chat;
