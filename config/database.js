const Sequelize = require('sequelize');
module.exports = new Sequelize('todoApi', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres' // Change to your database type
});
