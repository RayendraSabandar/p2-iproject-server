'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cocktail.belongsTo(models.Tag)
    }
  };
  Cocktail.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    glass: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    strIngredient1: DataTypes.STRING,
    strIngredient2: DataTypes.STRING,
    strIngredient3: DataTypes.STRING,
    strIngredient4: DataTypes.STRING,
    strIngredient5: DataTypes.STRING,
    strIngredient6: DataTypes.STRING,
    strIngredient7: DataTypes.STRING,
    strIngredient8: DataTypes.STRING,
    strIngredient9: DataTypes.STRING,
    strIngredient10: DataTypes.STRING,
    strIngredient11: DataTypes.STRING,
    strIngredient12: DataTypes.STRING,
    strIngredient13: DataTypes.STRING,
    strIngredient14: DataTypes.STRING,
    strIngredient15: DataTypes.STRING,
    strMeasure1: DataTypes.STRING,
    strMeasure2: DataTypes.STRING,
    strMeasure3: DataTypes.STRING,
    strMeasure4: DataTypes.STRING,
    strMeasure5: DataTypes.STRING,
    strMeasure6: DataTypes.STRING,
    strMeasure7: DataTypes.STRING,
    strMeasure8: DataTypes.STRING,
    strMeasure9: DataTypes.STRING,
    strMeasure10: DataTypes.STRING,
    strMeasure11: DataTypes.STRING,
    strMeasure12: DataTypes.STRING,
    strMeasure13: DataTypes.STRING,
    strMeasure14: DataTypes.STRING,
    strMeasure15: DataTypes.STRING,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};