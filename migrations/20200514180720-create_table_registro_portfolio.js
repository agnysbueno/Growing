'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'registro_portfolio',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        titulo: {
          type: Sequelize.STRING(300),
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING(300),
          allowNull: true
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
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
    return queryInterface.dropTable('registro_portfolio');
  }
};
