const Sequelize = require('sequelize');
const db = require('./db');

const Consumables = db.define('consumables', {
    type: Sequelize.STRING,
    author: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    details: Sequelize.TEXT
  });

  module.exports = Consumables;
