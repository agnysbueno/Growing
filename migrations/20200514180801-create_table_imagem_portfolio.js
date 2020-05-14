'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'imagem_portfolio',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        imagem: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        fk_registro_portfolio: {
          type: Sequelize.INTEGER,
          references: {
            model: 'registro_portfolio',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('imagem_portfolio');
  }
};