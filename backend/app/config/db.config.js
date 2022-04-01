require("dotenv").config();
const pg = require("pg");

module.exports = new pg.Pool({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  max: 10,
  idleTimeoutMillis: 30000
});

// module.exports = {
//   HOST: process.env.POSTGRES_HOST,
//   USER: process.env.POSTGRES_USER,
//   PASSWORD: process.env.POSTGRES_PASS,
//   DB: process.env.POSTGRES_DB,
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
