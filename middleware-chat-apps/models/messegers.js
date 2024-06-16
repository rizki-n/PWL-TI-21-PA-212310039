'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messeger extends Model {
    static associate(models) {
      Messeger.belongsTo(models.User, { as: 'Sender', foreignKey: 'from_id' });
      Messeger.belongsTo(models.User, { as: 'Receiver', foreignKey: 'to_user_id' });
    }
  }

  Messeger.init({
    from_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    messeges: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submit_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Messegers',
  });

  return Messeger;
};