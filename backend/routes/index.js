var express = require('express');
var router = express.Router();
const createError = require('http-errors');

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

router.get('/admin/login', function(request, response, next) {
  console.log('Login Session:', response.session)
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/events', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/checkin', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/create-event', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/preview-event', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/accounts', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/create-user', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/data', function(request, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html');
});

router.get('/admin/cookie-jar', function(req, res, next) {
  
  /**
   *  give the admin a special cookie to view the admin/login page 
   */

   res.session.cookie({cookie_monster: 'admin'});
  res.status(200).sendFile(__basedir + '/build/index.html');
});

module.exports = router;
