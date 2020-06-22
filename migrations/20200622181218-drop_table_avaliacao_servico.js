'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('avaliacao_servico')
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.createTable(
        'avaliacao_servico',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          fk_usuario_prestador: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuario_servico_especifico',
              key: 'fk_usuario'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
          },
          fk_servico: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuario_servico_especifico',
              key: 'fk_servico'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false
          },
          nota: {
            type: Sequelize.INTEGER,
            allowNull: false
          }
        }
      )
    ])
  }
};
