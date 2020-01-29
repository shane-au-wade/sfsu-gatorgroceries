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
                connection.none('insert into users (id, type, first_name, last_name, email, password) values ($1,$2,$3,$4,$5,$6)', [uuid, userBody.type, userBody.firstName.toLowerCase(), userBody.lastName.toLowerCase(), userBody.email.toLowerCase(), hash])
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
            connection.one('select * from users where email = $1', [email.toLowerCase()])
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
            connection.one('select * from orders where student_id=$1 and event_id=$2',[orderParams.studentID.toLowerCase()+'@mail.sfsu.edu',orderParams.eventID])
            .then((result) => {
                resolve(result)
            })
            .catch((e) => {
                reject({error: "Not Found"})
            })
        })
    }

    static getAllOrders(orderParams){
        let query = `select 
                    orders.*, 
                    users.first_name, 
                    users.last_name 
                    from orders 
                    left join 
                    users 
                    on orders.student_id = users.email
                    where event_id=$1`

        return new Promise((resolve,reject) => {
            connection.manyOrNone(query,[orderParams.eventID])
            .then((result) => {
                resolve(result)
            })
            .catch((e) => {
                reject({error: "Not Found"})
            })
        })
    }

    static getUsers(){
        return new Promise((resolve,reject) => {
            connection.many("select * from users where type = 'admin'")
            .then((result) => {

                const newUser = result.map((item) => {
                    console.log()
                                        
                    return {name: item.first_name.charAt(0).toUpperCase() + item.first_name.slice(1) + ' ' + item.last_name.charAt(0).toUpperCase() +'.', type: item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                })
                resolve(newUser)
            })
            .catch((e) => {
                reject({error: "No User Found"})
            })
        })
    }

}

module.exports = admin