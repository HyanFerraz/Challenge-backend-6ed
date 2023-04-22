const { DataTypes, Model } = require('sequelize');

class Shelter extends Model {
    static init (connection) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            city: DataTypes.STRING,   
            state: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    
}

module.exports = Shelter;