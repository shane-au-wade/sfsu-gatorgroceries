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

}

module.exports = events