var express = require('express');
var router = express.Router();
const passport = require('../auth/passport').passport;

const db = require("../db/index.js");

  // router.post('/login',  passport.authenticate('local'), function(req, res, next) {
  // // console.log('User Authenicated');
  // res.status(200).send(true);
  // });

  router.post('/login', function(req, res, next) {
    // console.log('User Authenicated');
    console.log('login: ', req.body)
    res.status(200).send(true);
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

  router.get('/search-order/:eventID/:studentID', function(req, res, next) {
  
    /**
     *  query the Orders table in the db for an order where
     *  student email and eventID are equal. 
     *  
     *  return json of the order
     */
     console.log('search params: ', req.params)

  });

  router.get('/get-admin-users', function(req, res, next) {
  
    /**
     *  Query the users table and return all users that are of type admin or dev
     *  
     *  return the users
     */
     console.log('get-admin-users called from admin/accounts/adminAccounts.js')

     let tempUsers = [
      {name: 'Shane W.', type:'Dev'},
      {name: 'Jon K.', type:'Dev'},
      {name: 'Eduardo R.', type:'Dev'},
      ]

     res.status(200).send(tempUsers)
  });


  router.post('/create-user', async (req, res, next) => {
    
    try{
      
        res.send(await db.admin.createUser(req.body))

    }catch(e){

        res.json({error: "Cannot be created"})
        
    }

  });


  router.post('/create-event', async (req, res, next) => {

    
    try{
      res.status(200).send(await db.events.createEvents(req.body))
    }catch(e){
      console.log(e)
    }

    // try{
      
    //   await db.events.createEvents(req.body)
      
    //   res.send("Created")

    // }catch(e){
      
    //   res.json({error: "Cannot be created"})

    
     
  });

  


module.exports = router;