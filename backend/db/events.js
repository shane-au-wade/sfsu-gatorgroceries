const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;

class events {

    static getActiveEvents () {
    
      return new Promise((resolve,reject) => {

        connection.many('select * from events where active=true;').then(data => {

            resolve(data)

        }).catch(e => {

            reject(e)

        })
      })
    }


    static createEvents (eventBody) {

      return new Promise((resolve,reject) => {


        connection.none('insert into events(id, created_by, active, date, time, name, location, menu, created_at, updated_at) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[])
        .then(() => {
          console.log("Success")
        }).catch(e => {
          console.log("error")
        })
      })
    }

}

module.exports = events