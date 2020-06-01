let express = require('express');
let router = express.Router();
const db = require('../db/index.js')

router.post('/confirm-order', async (req, res, next) => {
  
  /**
   *  insert into db orders table the order   
   */
   
  console.log(req.body)
   
  try{
    let orderData = await db.admin.confirmOrder(req.body)
    //console.log(orderData)
    if(orderData === null) { orderData = "Invalid Order ID" }
    res.status(200).send(orderData)
  }catch(e){
    res.send("error")
  }
});

// router.post('/submit-feedback', function(req, res, next) {
  
//   /**
//    *  insert into db the feedback table the feedback   
//    */
   
// });


module.exports = router;
