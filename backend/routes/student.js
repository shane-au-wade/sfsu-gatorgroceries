var express = require('express');
var router = express.Router();

const db = require('../db/index.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/verify-student', async (req, res, next) => {
  
    try{  
    res.status(200).send(await db.student.firstTimeUser(req.body));
    }catch(e){
      res.status(200).send(e);
    }

});


router.post('/submit-survey', async(req, res, next) => {
  
  /**
   * using student email, first name, last name
   *  query the DB
   *  update survey complete to true
   * 
   */
    try{
      
      res.status(200).send( await db.student.submitSurvey(req.body.student_email))
    }catch(e){
      res.status(200).send(e)
    }
});

router.post('/place-order', async (req, res, next) => {
  
  /**
   *  insert into db orders table the order   
   */
   
  try{
    res.status(200).send(await db.student.placeOrder(req.body))

  }catch(e){
    res.send("error")
  }



});

router.post('/submit-feedback', function(req, res, next) {
  
  /**
   *  insert into db the feedback table the feedback   
   */
   
});


module.exports = router;
