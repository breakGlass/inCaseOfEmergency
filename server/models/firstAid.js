const Sequelize = require('sequelize');
const db = require('./db');

const FirstAid = db.define('firstAid', {
    type: Sequelize.STRING,
    author: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    details: Sequelize.TEXT
  });

  module.exports = FirstAid;
