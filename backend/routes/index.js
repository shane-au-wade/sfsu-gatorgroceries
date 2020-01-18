var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cookie-jar', function(req, res, next) {
  
  /**
   *  give the admin a special cookie to view the admin/login page 
   */
   res.status(404).send();
});

module.exports = router;
