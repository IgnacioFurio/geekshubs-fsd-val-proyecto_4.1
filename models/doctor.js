'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(
        models.User,
        {
          foreignKey: "user_id"
        }
      );

      Doctor.hasMany(
        models.Appointment,
        {
          foreignKey: "doctor_id"
        }
      );
    }
  }
  Doctor.init({
    collegiate_member: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    DNI: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    contract_at: DataTypes.DATEONLY,
    contract_until: DataTypes.DATEONLY,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};