'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(
        models.Role,
        {
          foreignKey:"role_id"
        }
      );

      User.hasMany(
        models.Patient,
        {
          foreignKey: "user_id"
        }
        );

      User.hasMany(
        models.Doctor,
        {
          foreignKey: "user_id"
        }
        );
    }
  }
  User.init({
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};