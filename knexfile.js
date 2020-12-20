// Update with your config settings.
require('dotenv').config();

const localPg = {
  host:'localhost', 
  port: 5432,
  //password: 'postgres',
  database: 'housing-busters'
  
}
const heroku = process.env.DATABASE_URL + '?ssl=true'

const localPGConnection = `postgres://@localhost/housing-busters`
module.exports = {

  development: {
    client: 'pg',
    connection: localPg
  },



  staging: {
    client: 'pg',
    connection: localPg,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true, 
    connection: localPg,
    migrations: {
      directory: './migrations'
    },
    seeds:{
      directory: './seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
  },
  testing: {
    client: 'pg',
    connection: {
      filename: './test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
 
  

};