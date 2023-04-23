const { Model, DataTypes } = require('sequelize');

class Pet extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            adopted: DataTypes.BOOLEAN,
            age: DataTypes.INTEGER,
            address: DataTypes.STRING,
            image: DataTypes.STRING,
            }, {
                sequelize
            });
    }

    static associate(models) {
        this.belongsTo(models.Shelter, { foreignKey: 'shelterId', as: 'shelter' });
        this.hasOne(models.Adoption, { foreignKey: 'petId', as: 'adoption' });
    }
}

module.exports = Pet;

