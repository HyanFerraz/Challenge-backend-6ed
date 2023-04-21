const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Tutor = require('../models/Tutor');

const connection = new Sequelize(config);

Tutor.init(connection);

module.exports = connection;