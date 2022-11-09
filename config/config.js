require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports ={
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    // use_env_variable: true,
    database: "nodeapp",
    host: DB_HOST,
    dialect: "postgres"
  },
  
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_test",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "sequelize_database_prod",
    host: DB_HOST,
    dialect: "postgres"
  }
}

// const { Pool } = require('pg')

// const pool = new Pool({
//   user: 'nodeappuser',
//   database: 'nodeapp',
//   password: 'nodepassword',
//   port: 5432,
//   host: 'localhost',
// })

