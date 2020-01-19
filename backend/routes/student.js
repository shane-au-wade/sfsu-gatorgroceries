var express = require('express');
var router = express.Router();

const db = require('../db/index.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/verify-student', function(req, res, next) {
  
   /**
    * two options
    * 
    *   grab student email, check if email is @mail.sfsu.edu
    *   or @sfsu.edu
    *   
    * using student emial given in
    *     the body of the request: 
    * uery the database 
    *   
    *   Option 1: student does not exisit in db => student's first time making an order
    *   {
    *     they are not in the db
    *     insert student in the db
    *     survery_completed = false
    *   }
    * 
    *   option 2: student exisists
    * {
    *   check for survery complete;
    * }
    * 
    *   return survery_complete 
    *   
    *   This will tell the front end to either redirect to the 
    *   order making process or to the survey.
    * 
    */
    
    

});


router.post('/submit-survey', async(req, res, next) => {
  
  /**
   * using student email, first name, last name
   *  query the DB
   *  update survey complete to true
   * 
   */
  await db.student.submitSurvey(req.body.email)
   
   

});

router.post('/get-active-events', function(req, res, next) {
  
  /**
   *  query the db events table
   *  find all where active = true
   *  return them as and array of json objects
   */
   
   

});

router.post('/place-order', function(req, res, next) {
  
  /**
   *  insert into db orders table the order   
   */
   
});

router.post('/submit-feedback', function(req, res, next) {
  
  /**
   *  insert into db the feedback table the feedback   
   */
   
});


module.exports = router;
