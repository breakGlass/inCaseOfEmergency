const Sequelize = require('sequelize');
const db = require('./db');

const Resource = db.define('resource', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.DOUBLE),
  type: Sequelize.ENUM('Consumables', 'First Aid', 'Shelters', 'Utilities', 'Miscellaneous'),
  author: Sequelize.STRING,
  active: Sequelize.BOOLEAN,
  details: Sequelize.TEXT
});

module.exports = Resource;