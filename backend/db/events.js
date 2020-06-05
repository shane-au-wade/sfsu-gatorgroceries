const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;

class events {

    static getActiveEvents () {
    
      return new Promise((resolve,reject) => {

        connection.many('select * from events where active=true and date >= CURRENT_DATE;').then(data => {

            resolve(data)

        }).catch(e => {

            reject(e)

        })
      })
    }


    static createEvent (eventBody) {

      return new Promise((resolve,reject) => {
        let uuid = uuidv4()
        //Admin Id: 03fea3c8-87d0-4409-a0ca-cf2aa57e766a

        connection.none('insert into events(id, created_by, active, date, time, name, ' +
          'location, menu, time_blocks) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[uuid, '03fea3c8-87d0-4409-a0ca-cf2aa57e766a', true, eventBody.date
          , eventBody.time, eventBody.name, eventBody.location, JSON.stringify(eventBody.menu), JSON.stringify(eventBody.time_blocks)])
        .then(() => {
          resolve(true)
        }).catch(e => {
          console.log(e)
          console.log("error")
        })
      })
    }


    static updateEvent (eventBody) {

      return new Promise((resolve,reject) => {
        
        //Admin Id: 03fea3c8-87d0-4409-a0ca-cf2aa57e766a

        let query = 
        `
        update events
        set 
        date = $2
        ,time = $3
        ,name = $4
        ,location = $5
        ,menu = $6
        ,time_blocks = $7
        ,updated_at = NOW()
        where 
        id = $1
        `

        connection.none(query,[eventBody.id, eventBody.date
          , eventBody.time, eventBody.name, eventBody.location, JSON.stringify(eventBody.menu), JSON.stringify(eventBody.time_blocks)])
        .then(() => {
          resolve(true)
        }).catch(e => {
          console.log(e)
          console.log("error")
        })
      })
    }

    /**
     * 
     * @param {the uuid of the event to get stats for in the db} event_id 
     * 
     */

    static getEventStats (event_id) {

      console.log('event_id inside of db object', event_id)
      return true
      // return new Promise((resolve,reject) => {
      //   let uuid = uuidv4()
      //   //Admin Id: 03fea3c8-87d0-4409-a0ca-cf2aa57e766a

      //   connection.none('insert into events(id, created_by, active, date, time, name, ' +
      //     'location, menu, time_blocks) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[uuid, '03fea3c8-87d0-4409-a0ca-cf2aa57e766a', true, eventBody.date
      //     , eventBody.time, eventBody.name, eventBody.location, JSON.stringify(eventBody.menu), JSON.stringify(eventBody.time_blocks)])
      //   .then(() => {
      //     resolve(true)
      //   }).catch(e => {
      //     console.log(e)
      //     console.log("error")
      //   })
      // })
    }

    /**
     * 
     * @param {These params may contain the number of events
     * to limit the query to. for pagination later} params 
     */

    static getAllEventStats (params) {

      console.log('params of db object', params)
  
      return new Promise((resolve,reject) => {
        
        let getAllEventStatsQuery = 
        `
        with items_count as (
          select 
          
          orders.id as order_id,
          orders.student_id,
          
          case 
            when lower(orders.student_id) like '%@mail.sfsu.edu%' or lower(orders.student_id) like '%@sfsu.edu%'
            then 1
            else 0
          end as sfsu_email_C,
          
          case 
            when lower(orders.student_id) not like '%@mail.sfsu.edu%'
            then 1
            else 0
          end as other_email_C,
          
          case 
            when lower(item) like '%standard%'
            then 1
            else 0
          end as standard,
          
          case 
            when lower(item) like '%vegetarian%'
            then 1
            else 0
          end as vegetarian,
          
          case 
            when lower(item) like '%vegan%'
            then 1
            else 0
          end as vegan
          
          from orders
          left join
          items 
          on orders.id = items.order_id
          )
          select
          events.id,
          events.date,
          events.name,
          count(orders.id) as total_orders,
          sum(items_count.standard) as standard_c,
          sum(items_count.vegetarian) as vegetarian_c,
          sum(items_count.vegan) as vegan_c,
          sum(items_count.sfsu_email_c) as sfsu_email_count,
          sum(items_count.other_email_c) as other_email_count
          from
          events
          left join
          orders
          on orders.event_id = events.id
          left join items_count
          on orders.id = items_count.order_id
          where 
          orders.student_id not in 
          ('swade1@mail.sfsu.edu', 
           'dyuyu@mail.sfsu.edu', 
           'ramostatianna@gmail.com', 
           'shane.au.wade@gmail.com')
           group by events.id, events.date, events.name;
        `

        connection.any(getAllEventStatsQuery,[])
        .then((statsData) => {
          resolve(statsData)
        }).catch(e => {
          
          console.log("error ", e)
          resolve('error in db/events.js getAllEventStats()' + e)
        })
      })
    }



    

}

module.exports = events