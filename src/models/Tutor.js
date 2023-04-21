const { DataTypes, Model } = require('sequelize');

class Tutor extends Model {
    static init (connection) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            city: DataTypes.STRING,   
            about: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = Tutor;