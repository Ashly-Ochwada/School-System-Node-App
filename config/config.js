// require('dotenv').config();
// const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;


// module.exports ={
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: "nodeapp",
//     host: DB_HOST,
//     dialect: "postgres"
//   },
  
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: "sequelize_database_test",
//     host: DB_HOST,
//     dialect: "postgres"
//   },
//   production: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: "sequelize_database_prod",
//     host: DB_HOST,
//     dialect: "postgres"
//   }
// }



require('dotenv').config();

module.exports ={
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "nodeapp",
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    // use_env_variable: true,
    database: "nodeapp",
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: "postgres"
  }
}


