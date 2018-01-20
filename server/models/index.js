const db = require('./db');
const Resources = require('./resources');
const Consumables = require('./consumables');
const FirstAid = require('./firstAid');
const Miscellaneous = require('./miscellaneous');
const Shelters = require('./shelters');
const Utilities = require('./utilities');

Consumables.belongsTo(Resources);
FirstAid.belongsTo(Resources);
Miscellaneous.belongsTo(Resources);
Shelters.belongsTo(Resources);
Utilities.belongsTo(Resources);

module.exports = {
    db,
    Resources,
    Consumables,
    FirstAid,
    Miscellaneous,
    Shelters,
    Utilities
};
