const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;

class events {

    static getActiveEvents () {
    
      return new Promise((resolve,reject) => {

        connection.many('select * from events where active=true and date >= NOW();').then(data => {

            resolve(data)

        }).catch(e => {

            reject(e)

        })
      })
    }


    static createEvents (eventBody) {

      return new Promise((resolve,reject) => {
        let uuid = uuidv4()
        //Admin Id: 03fea3c8-87d0-4409-a0ca-cf2aa57e766a

        connection.none('insert into events(id, created_by, active, date, time, name, ' +
          'location, menu, time_blocks) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[uuid, '03fea3c8-87d0-4409-a0ca-cf2aa57e766a', true, eventBody.date
          , eventBody.time, eventBody.name, eventBody.location, JSON.stringify(eventBody.menu), JSON.stringify(eventBody.time_blocks)])
        .then(() => {
          console.log("Success")
        }).catch(e => {
          console.log(e)
          console.log("error")
        })
      })
    }

}

module.exports = events