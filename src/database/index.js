const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Tutor = require('../models/Tutor');
const Shelter = require('../models/Shelter');
const Pet = require('../models/Pet');

const connection = new Sequelize(config);

Tutor.init(connection);
Shelter.init(connection);
Pet.init(connection);

Pet.associate(connection.models);

module.exports = connection;