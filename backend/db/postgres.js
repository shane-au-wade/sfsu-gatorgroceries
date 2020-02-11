const pgp = require('pg-promise')();
const conn = pgp(process.env.DATABASE_URL);
const uuid = require('uuid/v4');

console.log('database initialized')
module.exports = {connection:conn, uuidv4:uuid};