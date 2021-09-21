'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cocktails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      glass: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      video: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instruction: {
        type: Sequelize.TEXT
      },
      strIngredient1: {
        type: Sequelize.STRING
      },
      strIngredient2: {
        type: Sequelize.STRING
      },
      strIngredient3: {
        type: Sequelize.STRING
      },
      strIngredient4: {
        type: Sequelize.STRING
      },
      strIngredient5: {
        type: Sequelize.STRING
      },
      strIngredient6: {
        type: Sequelize.STRING
      },
      strIngredient7: {
        type: Sequelize.STRING
      },
      strIngredient8: {
        type: Sequelize.STRING
      },
      strIngredient9: {
        type: Sequelize.STRING
      },
      strIngredient10: {
        type: Sequelize.STRING
      },
      strIngredient11: {
        type: Sequelize.STRING
      },
      strIngredient12: {
        type: Sequelize.STRING
      },
      strIngredient13: {
        type: Sequelize.STRING
      },
      strIngredient14: {
        type: Sequelize.STRING
      },
      strIngredient15: {
        type: Sequelize.STRING
      },
      strMeasure1: {
        type: Sequelize.STRING
      },
      strMeasure2: {
        type: Sequelize.STRING
      },
      strMeasure3: {
        type: Sequelize.STRING
      },
      strMeasure4: {
        type: Sequelize.STRING
      },
      strMeasure5: {
        type: Sequelize.STRING
      },
      strMeasure6: {
        type: Sequelize.STRING
      },
      strMeasure7: {
        type: Sequelize.STRING
      },
      strMeasure8: {
        type: Sequelize.STRING
      },
      strMeasure9: {
        type: Sequelize.STRING
      },
      strMeasure10: {
        type: Sequelize.STRING
      },
      strMeasure11: {
        type: Sequelize.STRING
      },
      strMeasure12: {
        type: Sequelize.STRING
      },
      strMeasure13: {
        type: Sequelize.STRING
      },
      strMeasure14: {
        type: Sequelize.STRING
      },
      strMeasure15: {
        type: Sequelize.STRING
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cocktails');
  }
};