const dbConfig = require("../config/db.config.js");
const pg = require("pg");

// replace with pg? how does that affect the rest of my operations?
const pgPool = new pg.Pool({
  database: dbConfig.DB,
  host: dbConfig.HOST,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
});

module.exports = pgPool;
