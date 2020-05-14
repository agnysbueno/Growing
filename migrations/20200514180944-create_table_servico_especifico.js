'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'servico_especifico',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        servico: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        fk_servico_geral: {
          type: Sequelize.INTEGER,
          references: {
            model: 'servico_geral',
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
    return queryInterface.dropTable('servico_especifico');
  }
};