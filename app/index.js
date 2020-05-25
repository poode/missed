const express = require('express');
const cors = require('cors');
const trimRequest = require('trim-request');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');

const { ServerError } = require('../app/util');
const { IMAGE_STORAGE } = require('../config/constant');

const { userRouter } = require('./router/user.router');
const { airportRouter } = require('./router/airport.router');
const { categoryRouter } = require('./router/category.router');
const { locationRouter } = require('./router/location.router');
const { colorRouter } = require('./router/color.router');

const app = express();
app.use(passport.initialize());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev': 'tiny'));
app.use(`/${IMAGE_STORAGE}`,express.static(path.resolve(`./${IMAGE_STORAGE}`)));
app.use(express.json());

app.use(trimRequest.all);

app.get('/healthcheck', (req, res, next) => {
  res.json({ message: 'server is Up and Running!' });
});

app.use('/users', userRouter);
app.use('/airports', airportRouter);
app.use('/categories', categoryRouter);
app.use('/locations', locationRouter);
app.use('/colors', colorRouter);

// 404 handler
app.use('*', (req, res, next) => {
  next(new ServerError('API_NOT_FOUND', 404));
});

// error handler
app.use((err, req, res, next) => {
  if (!err.status) {
    console.error(err);
    process.exit(0);
  }
  console.log('Custom Server Error>', err.message);
  res.status(err.status).json({ message: err.message, status: err.status });
});

module.exports = {
  app
}
