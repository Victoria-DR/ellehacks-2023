const express = require('express');
const cors = require('cors');

const signup = require('.routes/signup');
const login = require('./routes/login');
const createGarden = require('./routes/createGarden');
const joinGarden = require('./routes/joinGarden');
const fetchGarden = require('./routes/fetchGarden');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', signup);
app.post('/login', login);

app.post('/createGarden', createGarden);
app.post('/joinGarden', joinGarden);
app.post('/fetchGarden', fetchGarden);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
