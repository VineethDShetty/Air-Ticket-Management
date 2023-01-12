//Pool of all the athrev-ed db accesses
console.log("inside dg - config 1");
const { Pool } = require("pg");

// const config = {
//     host: 'localhost',
//     port: '5432',
//     database: 'AirlineSystem',
//     user: 'postgres',
//     password: ''
// };
// const pool = new Pool(config);
const config = process.env.Database_url;
const pool = new Pool({ connectionString: config, ssl: { rejectUnauthorized: false } });
module.exports = pool;