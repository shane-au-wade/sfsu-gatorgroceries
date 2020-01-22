const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;



class Student {

    static submitSurvey(email) {
        return new Promise((resolve,reject) => {
            connection.none('update users set survey_complete = true where email = $1;', [email])
            .then(() => {
                resolve(true)
            })
            .catch(e => {
                reject(false)
            })
        })
    }

    static firstTimeUser(userBody){
        return new Promise((resolve,reject) => {
            let uuid = uuidv4()
            connection.none('insert into users (type,first_name,last_name,email,survey_complete,id) values ($1,$2,$3,$4,$5,$6)', ['student',userBody.first_name,userBody.last_name,userBody.student_email,false,uuid])
            .then(() => {
                resolve(false)
            }).catch(e => {
                    connection.one('select survey_complete from users where email=$1',[userBody.student_email])
                    .then((result) => {
                        reject(result.survey_complete)
                    }).catch(e => {
                        console.log(e)
                    })
            })
        })
    }

    static placeOrder(orderBody) {
        let uuid = uuidv4()
       return new Promise((resolve,reject) => {
        console.log("HEllo")
        console.log(orderBody.order)
        connection.none('insert into orders (student_id, event_id, "order", complete, bag, id) values ($1,$2,$3,$4,$5,$6)',[orderBody.student_id, orderBody.event_id,JSON.stringify(orderBody.order), false, false, uuid])
        .then(() => {
            resolve(true)
        }).catch((e) => {
            console.log(e)
            reject(false)
        })
       })
    }
    
}

module.exports = Student