const express = require('express');
const cors = require('cors');
require('dotenv').config();

const signup = require('./routes/users/signup');
const login = require('./routes/users/login');
const createGarden = require('./routes/gardens/createGarden');
const joinGarden = require('./routes/gardens/joinGarden');
const fetchGarden = require('./routes/gardens/fetchGarden');
const suggestPlants = require('./routes/gardens/suggestPlants');
const fetchPlant = require ('./routes/gardens/fetchPlant');
const createPost = require('./routes/posts/createPost');
const fetchPost = require('./routes/posts/fetchPost');
const chat = require('./routes/chat');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', signup);
app.post('/login', login);

app.post('/createGarden', createGarden);
app.post('/joinGarden', joinGarden);
app.post('/fetchGarden', fetchGarden);

app.post('/suggestPlants', suggestPlants);
app.post('/fetchPlant', fetchPlant);

app.post('/createPost', createPost);
app.post('/fetchPost', fetchPost);

app.post('/chat', chat);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
