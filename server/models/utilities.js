const Sequelize = require('sequelize');
const db = require('./db');

const Utilities = db.define('utilities', {
    type: Sequelize.STRING,
    author: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    details: Sequelize.TEXT
  });

  module.exports = Utilities;
