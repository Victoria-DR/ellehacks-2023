var express = require('express');
var cors = require('cors');

var login = require('./routes/login');

var app = express();
app.use(cors());
app.use(express.json());

app.post('/login', login);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
