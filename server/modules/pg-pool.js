const pg = require('pg');

const pgPool = new pg.Pool(
    {
      database: 'brewviewsmn',
      host: 'localhost',
      port: 5432,
      max: 10,
      idleTimeoutMillis: 30000,
    }
);
