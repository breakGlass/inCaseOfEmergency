const Sequelize = require('sequelize');
const db = require('./db');

const Shelters = db.define('shelters', {
    type: Sequelize.STRING,
    author: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    details: Sequelize.TEXT
  });

  module.exports = Shelters;
