require("dotenv").config();
const pg = require("pg");

module.exports = new pg.Pool({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  max: 10,
  idleTimeoutMillis: 30000
});
