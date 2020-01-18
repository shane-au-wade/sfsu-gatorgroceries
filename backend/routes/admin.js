var express = require('express');
var router = express.Router();

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

  router.post('/get-active-events', function(req, res, next) {
  
    /**
     *  return all active events from the events table in the db
     *  json
     */
     
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

  router.post('/create-event', function(req, res, next) {
  
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