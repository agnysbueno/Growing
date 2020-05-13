'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuario_preferencia',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false
        },
        fk_servico: {
          type: Sequelize.INTEGER,
          references: {
            model: 'servicos_gerais',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_preferencia');
  }
};
