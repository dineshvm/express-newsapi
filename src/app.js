
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = require('./routes');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/', router);


module.exports = app;