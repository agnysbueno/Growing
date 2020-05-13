'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'servicos_especificos',
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
            model: 'servicos_gerais',
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
    return queryInterface.dropTable('servicos_especificos');
  }
};