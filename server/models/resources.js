const Sequelize = require('sequelize');
const db = require('./db');

const Resource = db.define('resource', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.DOUBLE)
});

module.exports = Resource;