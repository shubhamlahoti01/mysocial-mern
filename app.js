const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'config/config.env' });
}

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

const user = require('./routes/user');
const post = require('./routes/post');
app.use('/api/v1', user);
app.use('/api/v1', post);

// we use the code when we build our frontend folder
app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build/index.html'));
});

module.exports = app;
