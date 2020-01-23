const db = require('./postgres');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = db.connection;
const uuidv4 = db.uuidv4;


class admin {

    static createUser(userBody) {
        let uuid = uuidv4()
        return new Promise((resolve,reject) => {
            bcrypt.hash(userBody.password, saltRounds, function(err, hash) {
                // Store hash in your password DB. 
                connection.none('insert into users (id, type, first_name, last_name, email, password) values ($1,$2,$3,$4,$5,$6)', [uuid, userBody.type, userBody.firstName, userBody.lastName, userBody.email, hash])
                .then(() => {
                    resolve("User Added")
                })
                .catch(e => {
                    reject(e)
                })
             })
         })
    }
        
    static getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            connection.one('select * from users where email = $1', [email])
            .then((data) => {
                // success;
                //console.log(data)
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(false)
            });
        });        
    }

}

module.exports = admin