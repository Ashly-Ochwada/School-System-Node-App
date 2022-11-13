var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
const middlewares= require("./middlewares/error");

dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler)


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// render('error');

module.exports = app;



