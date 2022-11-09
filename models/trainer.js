'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    static associate(models) {
      Trainer.hasOne(models.Course, {
          foreignKey: 'trainer_id',
          as: 'course',
        });
    }
  }
  Trainer.init({
    trainer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};