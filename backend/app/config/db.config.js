module.exports = {
    HOST: "localhost",
    USER: "catherinejarocki",
    PASSWORD: "",
    DB: "angular-node-postgres",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
