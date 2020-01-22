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

    console.log(req.body)
res.send("Created")
    // try{
      
    //   await db.events.createEvents(req.body)
      
    //   res.send("Created")

    // }catch(e){
      
    //   res.json({error: "Cannot be created"})
    
    // }
  
    /**
     *   you will recieve
     *      title,
     *      location,
     *      start_date,
     *      start time,
     *      end date,
     *      end time, 
     *      array of json objects that have items and qty
     * 
     * example data that we want for frontend 
     * let id = '7533a62d-270d-4dee-8be6-4e5d24a5b6e0';
        let date = '2020-01-02';
        let time = '1:30 PM - 3:30 PM';
        let name = 'Weekly Distribution';
        let location = 'SFSU | Annex 1'
        let menu = [
                    {item: 'Tuna, Canned', qty: '2'},
                    {item: 'beans, Canned', qty: '4'},
                    {item: 'chips', qty: '3'},
                    {item: 'celery', qty: '0'},
                    {item: 'chicken, Canned', qty: '0'},
                ]
     */
     
  });

  


module.exports = router;