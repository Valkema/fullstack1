'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {
    }
  };
  Superhero.init({
    nickname: {
      type: DataTypes.STRING,
      require: true,
      unique:true,
    },
    realName: {
      type: DataTypes.STRING,
      require: true,
    },
    originDescription: DataTypes.STRING,
    superpowers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    catchPhrase: DataTypes.STRING,
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  }, {
    sequelize,
    modelName: 'Superhero',
    underscored: true,
    tableName: 'superheroes'
  });
  return Superhero;
};