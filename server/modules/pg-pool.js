var url = require('url');
var pg = require('pg');

if(process.env.DATABASE_URL) {
  var params = url.parse(process.env.DATABASE_URL);
  var auth = params.auth.split(':');

  var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true,
    max: 10, // how many connections at one time
    idleTimeoutMillis: 5000 // 5 seconds to try to connect
  };
} else {
  var config = {
    database: 'brewviewsmn',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
  };
}

module.exports = new pg.Pool(config);
