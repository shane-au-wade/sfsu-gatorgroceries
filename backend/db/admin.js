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

    static updateOrder(orderBody){
        //console.log(orderBody);
        return new Promise((resolve,reject) => {
            connection.none('update orders set status = $1 where id=$2',[orderBody.status, orderBody.id])
            .then(async (result) => {

                resolve(await this.getOrder(orderBody.id))
            })
            .catch((e) => {
                reject({error: "Not Updated"})
            })
        })
    }

    static confirmOrder(orderBody){
        //console.log(orderBody);
        return new Promise((resolve,reject) => {
            connection.none('update orders set confirmed = true where id=$1',[orderBody.order_id])
            .then(async (result) => {

                resolve(await this.getOrder(orderBody.order_id))
            })
            .catch((e) => {
                reject({error: "Not Updated"})
            })
        })
    }

    static getOrder(orderID)
    {
        let query = `select 
        orders.*, 
        users.first_name, 
        users.last_name 
        from orders 
        left join 
        users 
        on orders.student_id = users.email
        where orders.id=$1`

        return new Promise((resolve,reject) => {
            connection.oneOrNone(query,[orderID])
            .then((order) => {
                resolve(order)
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

    // This db query will grab number of orders with "placed" status.
    static getPlacedOrders(event_id){
        return new Promise((resolve, reject) => {
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'placed'
            `
            connection.one(query, [event_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: 'Error fetching number of "placed" orders from admin getPlacedOrders().'
                })
            })
        })
    }

    // This db query will grab number of orders with "placed" status for student.
    static getPlacedOrdersForStudent(event_id, student_id){
        return new Promise((resolve, reject) => {
            console.log("Student was provided: ", student_id)
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'placed'
            and student_id = $2
            `
            connection.one(query, [event_id, student_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: `Error fetching number of "placed" orders from admin getPlacedOrdersForStudent() for student ${student_id}.`
                })
            })
        })
    }

    // This db query will grab number of orders with "ready" status.
    static getReadyOrders(event_id){
        return new Promise((resolve, reject) => {
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'ready'
            `
            connection.one(query, [event_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: 'Error fetching number of "ready" orders from admin getReadyOrders().'
                })
            })
        })
    }

    // This db query will grab number of orders with "ready" status for student.
    static getReadyOrdersForStudent(event_id, student_id){
        return new Promise((resolve, reject) => {
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'ready'
            and student_id = $2
            `
            connection.one(query, [event_id, student_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: `Error fetching number of "ready" orders from admin getReadyOrdersForStudent() for student ${student_id}.`
                })
            })
        })
    }

    // This db query will grab number of orders with "complete" status.
    static getCompletedOrders(event_id){
        return new Promise((resolve, reject) => {
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'complete'
            `
            connection.one(query, [event_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: 'Error fetching number of "complete" orders from admin getCompletedOrders().'
                })
            })
        })
    }

    // This db query will grab number of orders with "complete" status for student.
    static getCompletedOrdersForStudent(event_id, student_id){
        return new Promise((resolve, reject) => {
            const query = `
            select count(status)
            from orders
            where event_id = $1
            and status = 'complete'
            and student_id = $2
            `
            connection.one(query, [event_id, student_id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err)
                reject({
                    error: `Error fetching number of "complete" orders from admin getCompletedOrdersForStudent() for student ${student_id}.`
                })
            })
        })
    }

}

module.exports = admin