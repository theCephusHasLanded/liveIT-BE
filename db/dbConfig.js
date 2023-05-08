const pgp = require('pg-promise')();

require('dotenv').config();

//*For a cleaner method use the below const! (delete the process.env below and it should still work)
//const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env

// lets make a connection object!
const cn ={
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

// to connect the promise to the database connection object allows us to write SQL
const db = pgp(cn)

// Now we can Query!

module.exports = db;