require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config({
//   path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
// });

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



