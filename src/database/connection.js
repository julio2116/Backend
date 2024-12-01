const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');

const connection = new Sequelize({
    dialect: 'mysql',
    password: '1234',
    host: 'localhost',
    port: '3306',
    username: 'root',
    database: 'teste'
})
    
module.exports = connection;