'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(
        models.User
      );

      Patient.belongsToMany(
        models.Doctor,
        {
          through: "Appointments",
          foreignKey: "patient_id"
        }
      );
    }
  }
  Patient.init({
    post_code: DataTypes.INTEGER,
    allergy: DataTypes.STRING,
    surgery: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};