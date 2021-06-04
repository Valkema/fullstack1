const express = require('express');
const router = require('./router');
const {errorsHandler} = require('./middleware');
const app = express();
app.use(express.json());
app.use('/api', router);
app.use(errorsHandler.errorHandler);
module.exports = app;