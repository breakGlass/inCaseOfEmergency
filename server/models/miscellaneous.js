const Sequelize = require('sequelize');
const db = require('./db');

const Miscellaneous = db.define('miscellaneous', {
    type: Sequelize.STRING,
    author: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    details: Sequelize.TEXT
  });

  module.exports = Miscellaneous;
