const Sequelize = require('sequelize');
const db = require('../config/database');
const Todo = db.define(
  'todo',
  {
    task: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    percentCompleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: 'TestTable'
  }
);
module.exports = Todo;
