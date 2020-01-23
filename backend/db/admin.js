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
                resolve(data);
            })
            .catch(error => {
                reject(false)
            });
        });        
    }

    static searchOrder(orderParams){
        return new Promise((resolve,reject) => {
            connection.one('select * from orders where student_id=$1 and event_id=$2',[orderParams.studentID+'@mail.sfsu.edu',orderParams.eventID])
            .then((result) => {
                resolve(result)
            })
            .catch((e) => {
                reject({error: "Not Found"})
            })
        })
    }

}

module.exports = admin