const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;


class admin {

    static createUser(userBody) {
        let uuid = uuidv4()
        return new Promise((resolve,reject) => {
            connection.none('insert into users (id,type,first_name,student_email) values ($1,$2,$3,$4)', [uuid,userBody.type,userBody.name,userBody.email])
            .then(() => {
                resolve("User Added")
            })
            .catch(e => {
                reject(e)
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
                reject(error)
            });
        });        
    }

}

module.exports = admin