const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Tutor = require('../models/Tutor');
const Shelter = require('../models/Shelter');
const Pet = require('../models/Pet');
const Adoption = require('../models/Adoption');

const connection = new Sequelize(config);

Tutor.init(connection);
Shelter.init(connection);
Pet.init(connection);
Adoption.init(connection);

Tutor.associate(connection.models);
Pet.associate(connection.models);
Adoption.associate(connection.models)

module.exports = connection;