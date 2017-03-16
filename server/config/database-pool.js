var pg = require('pg');

var config = {
  database: 'brewviewsmn',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

module.exports = pool;






  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCCj9yFcdnP6Xq3pT1r8EBiUzDXowx_AHQ",
  //   authDomain: "brewviewsmn.firebaseapp.com",
  //   databaseURL: "https://brewviewsmn.firebaseio.com",
  //   storageBucket: "brewviewsmn.appspot.com",
  //   messagingSenderId: "233847923391"
  // };
  // firebase.initializeApp(config);
