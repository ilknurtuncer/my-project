
// db.js
const Sequelize = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
