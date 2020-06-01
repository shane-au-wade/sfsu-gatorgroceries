let express = require('express');
let router = express.Router();
const db = require('../db/index.js')
const transporter = require('../nodemailer/nodemailer.js').transporter
const htmlGen = require('../nodemailer/emailHTML').htmlGenerator

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
   
  console.log(req.body)
   
  let msg = {
    from: 'no-reply@gatorgroceries.com', // sender address
    to: 'shane.au.wade@gmail.com', // list of receivers  this will later be udpated to the actual students email
    subject: "Gator Groceries Order", // Subject line
   // text: JSON.stringify(req.body), // plain text body
    html: ``
  }

  try{
    let dbStatus = await db.student.placeOrder(req.body)
    msg.html = await htmlGen.generateEmail(req.body, dbStatus)
    //msg.to = dbStatus.student_email
    let info = await transporter.sendMail(msg)
    //console.log("Email status: ", info)
    res.status(200).send(dbStatus)
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
