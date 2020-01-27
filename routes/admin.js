var express = require('express');
var router = express.Router();
const passport = require('../auth/passport').passport;

const db = require("../db/index.js");

router.post('/login',  passport.authenticate('local', {session: false}), function(req, res, next) {
  // console.log('Username: ', req.body.username);
  // console.log('password: ', req.body.password);
  // console.log('User Authenicated');
  req.session.loggedin = true;
  res.status(200).send(true);
});

//comment

router.post('/logout', function(req, res, next) {
  
  if(req.session.loggedin)
  {
    delete req.session.loggedin
  }
  if(req.session.cookie_monster)
  {
    delete req.session.cookie_monster;
  }
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

  router.get('/search-order/:eventID/:studentID', async (req, res, next) => {
  
    /**
     *  query the Orders table in the db for an order where
     *  student email and eventID are equal. 
     *  
     *  return json of the order
     */

     try{
      res.status(200).send(await db.admin.searchOrder(req.params))
     }catch(e){
      res.status(200).send(e)
     }

  });

  router.get('/get-admin-users', async (req, res, next) => {
  
    /**
     *  Query the users table and return all users that are of type admin or dev
     *  
     *  return the users
     */
    try{
      
     res.status(200).send( await db.admin.getUsers())

    }catch(e){
      
     res.status(200).send(e)
    }
      



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
    
     
  });

  


module.exports = router;