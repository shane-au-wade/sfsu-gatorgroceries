var express = require('express');
var router = express.Router();


const db = require("../db/index.js");



router.post('/login', function(req, res, next) {
  
    /**
     *  setup passport authenication 
     *  bycrpt    
     */
     
  });

  router.post('/register', function(req, res, next) {
  
    /**
     *  registering a new user/admin/volunteer 
     *  only an admin will be able to create a new user
     */
     
  });

  router.get('/get-active-events', async (req, res, next) => {
  
    /**
     *  return all active events from the events table in the db
     *  json
     */
    try{

     const activeEvents = await db.events.getActiveEvents()
     res.send(activeEvents)
    }catch(e){
      res.json({error: 'No Active Events'})
    }
     
  });

  router.post('/get-past-events', function(req, res, next) {
  
    /**
     *  query the db for events that are created in a certain time frame
     *  get all events that happened 2 months ago using the created_at field
     * 
     */
     
  });

  router.get('/search-order/:eventID/:studentEmail', function(req, res, next) {
  
    /**
     *  query the Orders table in the db for an order where
     *  student email and eventID are equal. 
     *  
     *  return json of the order
     */
     
  });


  router.post('/create-user', async (req, res, next) => {
    
    try{
      
        res.send(await db.admin.createUser(req.body))

    }catch(e){

        res.json({error: "Cannot be created"})
        
    }

  });


  router.post('/create-event', async (req, res, next) => {

    console.log(req.body)
    try{
      res.status(200).send(await db.events.createEvents(req.body))
    }catch(e){
      console.log(e)
    }
    
     
  });

  


module.exports = router;