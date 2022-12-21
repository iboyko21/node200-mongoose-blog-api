const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// instruct mongoose to connect to your local MongoDB instance
mongoose.connect('mongodb://localhost:27017/my_blog', { useMongoClient: true });
mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;