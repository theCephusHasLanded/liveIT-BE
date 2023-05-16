const pgp = require('pg-promise')();

require('dotenv').config();

// lets make a connection object for our database to deploy ready! Production: Development
DATABASE_URL = process.env.DATABASE_URL

const cn = DATABASE_URL ? {
    connectionString: DATABASE_URL,
    max:30
} : {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
};

// to connect the promise to the database connection object allows us to write SQL
const db = pgp(cn)

// Now we can Query!

module.exports = db;