const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const passport = require('passport');

if(process.env.NODE_ENV === 'development') {
  console.log("here")
  require('dotenv').config();
}



const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');
const adminRouter = require('./routes/admin')

const app = express();




// dotenv setup when in development mode



global.__basedir = __dirname;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serving frontend
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('/admin', adminRouter)
app.use('/student', studentRouter);

app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
