const express = require("express");
const cors = require("cors");
const db = require("./app/models");
// const path = require('path');
const path = __dirname + '/app/views/';

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type application/json
app.use(express.json());

// parse requests of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

db.sequelize.sync();
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/visit.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/ 🚀`);
});
