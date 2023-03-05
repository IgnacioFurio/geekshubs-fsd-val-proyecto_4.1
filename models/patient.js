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
        models.User,
        {
          foreignKey: "user_id"
        }
      );

      Patient.hasMany(
        models.Appointment,
        {
          foreignKey: "patient_id"
        }
      );
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    DNI: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    post_code: DataTypes.INTEGER,
    birth: DataTypes.DATEONLY,
    allergy: DataTypes.STRING,
    surgery: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};