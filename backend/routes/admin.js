var express = require('express');
var router = express.Router();
const passport = require('../auth/passport').passport;
const db = require("../db/index.js");
let io = require('../socketIO')

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
  // if(req.session.cookie_monster)
  // {
  //   delete req.session.cookie_monster;
  // }
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

  router.get('/get-all-orders/:eventID', async (req, res, next) => {
  
    /**
     *  query the Orders table in the db for all orders for a specified event
     *  return json of the orders
     */

     try{
      res.status(200).send(await db.admin.getAllOrders(req.params))
     }catch(e){
      res.status(200).send(e)
     }

  });

  router.post('/updateOrder', async (req, res, next) => {
    // broadcast the updated order to all sockets connected

    try{

      let orderUpdate = await db.admin.updateOrder(req.body)
      io.of('/event-checkin').emit("update-orders", orderUpdate)
      res.status(200).send(orderUpdate)
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
      res.status(200).send(await db.events.createEvent(req.body))
    }catch(e){
      console.log(e)
    }
  });

  router.post('/update-event', async (req, res, next) => {
    
    // console.log('Event Data:', req.body)
    try{
      res.status(200).send(await db.events.updateEvent(req.body))
    }catch(e){
      console.log(e)
    }
     
  });

  router.post('/get-event-stats/:event_id', async (req, res, next) => {
    
    console.log('get event stats id: ', req.params)

    try{
      res.status(200).send(await db.events.getEventStats(req.params))
    }catch(e){
      console.log(e)
    }
     
  });

  router.post('/get-all-event-stats', async (req, res, next) => {
    
    console.log('get event stats id: ', req.params)

    try{
      res.status(200).send(await db.events.getAllEventStats(req.params))
    }catch(e){
      console.log(e)
    }
     
  });

  // This route will return the number of "placed" orders.
  router.post('/getPlacedOrders', async function (req, res) {
    try{
      var eventID = req.body.event_id
      var student_id = "" // If passed in data did not include student id, then search all orders.

      var numOrders = 0

      if(req.body.student_id !== ""){
        student_id = req.body.student_id // Search all orders belonging to this student.
        numOrders = await db.admin.getPlacedOrdersForStudent(eventID, student_id)

        numOrders = {
          count: Object.keys(numOrders).length
        }
      }
      else{
        numOrders = await db.admin.getPlacedOrders(eventID)
      }

      res.status(200).send(numOrders)
    }catch(err){
      console.log(err)
      //res.status(500).json({ error: 'Error fetching number of "placed" orders in /getPlacedOrders route for admin.'})
      res.status(200).send({count: 0})
    }
  })

  // This route will return the number of "ready" orders.
  router.post('/getReadyOrders', async function (req, res) {
    try{
      var eventID = req.body.event_id
      var student_id = "" // If passed in data did not include student id, then search all orders.

      var numOrders = 0

      if(req.body.student_id !== ""){
        student_id = req.body.student_id // Search all orders belonging to this student.
        numOrders = await db.admin.getReadyOrdersForStudent(eventID, student_id)

        numOrders = {
          count: Object.keys(numOrders).length
        }
      }
      else{
        numOrders = await db.admin.getReadyOrders(eventID)
      }

      res.status(200).send(numOrders)
    }catch(err){
      console.log(err)
      //res.status(500).json({ error: 'Error fetching number of "ready" orders in /getCompletedOrders route for admin.'})
      res.status(200).send({count: 0})
    }
  })

  // This route will return the number of "complete" orders.
  router.post('/getCompletedOrders', async function (req, res) {
    try{
      var eventID = req.body.event_id
      var student_id = "" // If passed in data did not include student id, then search all orders.

      var numOrders = 0

      if(req.body.student_id !== ""){
        student_id = req.body.student_id // Search all orders belonging to this student.
        numOrders = await db.admin.getCompletedOrdersForStudent(eventID, student_id)

        numOrders = {
          count: Object.keys(numOrders).length
        }
      }
      else{
        numOrders = await db.admin.getCompletedOrders(eventID)
      }

      res.status(200).send(numOrders)
    }catch(err){
      console.log(err)
      //res.status(500).json({ error: 'Error fetching number of "complete" orders in /getCompletedOrders route for admin.'})
      res.status(200).send({count: 0})
    }
  })

module.exports = router;