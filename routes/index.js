var express = require('express');
var router = express.Router();
const createError = require('http-errors');

const cookieCheck = (req, res, next) => {
  if(req.session.cookie_monster)
  {
    next();
  }
  else
  {
    console.log('cookie monster does not exist')
    res.status(404).send()
    // res.redirect('/')
  }
}


const initLoggin = (req, res, next) => {
  if(req.session.loggedin)
  {
    res.redirect('/admin/events')
  }
  else
  {
   next()
  }
}

const loggedin = (req, res, next) => {
  if(req.session.loggedin)
  {
    next()
  }
  else
  {
    console.log('cookie monster does not exist')
    res.status(404).send()
    // res.redirect('/')
  }
}


/* GET home page. */
router.get('/', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/events', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/signin', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/place-order', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/survey', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/login', cookieCheck, initLoggin, function(request, response, next) {
  console.log('Login Session:', request.session)
    response.status(200).sendFile(__basedir + '/build/index.html');

});

router.get('/admin/events', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/checkin', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/create-event', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/preview-event', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/accounts', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/create-user', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/data', cookieCheck, loggedin, function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/cookie-jar', function(req, res, next) {
  
  /**
   *  give the admin a special cookie to view the admin/login page 
   */
  req.session.cookie_monster = 'admin';
  res.status(200).sendFile(__basedir + '/build/index.html');
});

module.exports = router;
