const db = require('./postgres');
const connection = db.connection;
const uuidv4 = db.uuidv4;



class Student {

    static submitSurvey(email) {
        return new Promise((resolve,reject) => {
            connection.none('update users set survey_complete = true where student_email = $1;', [email])
            .then(() => {
                resolve("Survey completed")
            })
            .catch(e => {
                reject(e)
            })
        })
    }
    
}

module.exports = Student