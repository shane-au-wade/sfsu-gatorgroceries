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

}

module.exports = events