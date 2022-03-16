require("dotenv").config();

const host = process.env.POSTGRES_HOST;
const dbUser = process.env.POSTGRES_USER;
const dbPass = process.env.POSTGRES_PASS;
const db = process.env.POSTGRES_DB;

console.log("db user", dbUser);

module.exports = {
    HOST: host,
    USER: dbUser,
    PASSWORD: dbPass,
    DB: db,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
