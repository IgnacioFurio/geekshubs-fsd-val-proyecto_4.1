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
        models.User
      );
    }
  }
  Doctor.init({
    collegiate_member: DataTypes.INTEGER,
    contract_at: DataTypes.DATEONLY,
    contract_until: DataTypes.DATEONLY,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};