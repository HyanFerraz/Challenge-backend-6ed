const { DataTypes, Model } = require('sequelize');
//const sequelize = require('../database/index');

class Tutors extends Model {}

Tutors.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

}, {
    sequelize,
    modelName: 'Tutor',
}
);

module.exports = Tutors;