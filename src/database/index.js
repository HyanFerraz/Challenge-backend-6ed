const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Tutor = require('../models/Tutor');
const Shelter = require('../models/Shelter');

const connection = new Sequelize(config);

Tutor.init(connection);
Shelter.init(connection);

module.exports = connection;