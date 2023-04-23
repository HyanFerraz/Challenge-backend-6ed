const { Model, DataTypes } = require('sequelize');

class Adoption extends Model {
    static init(sequelize) {
        super.init({
            petId: DataTypes.INTEGER,
            tutorId: DataTypes.INTEGER,
            date: {
                type : DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            }, {
                sequelize
            });
    }

    static associate(models) {
        this.hasOne(models.Pet, { foreignKey: 'id', as: 'pet' });
        this.hasOne(models.Tutor, { foreignKey: 'id', as: 'tutor' });
    }
}

module.exports = Adoption;

