'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('avaliacao_usuario')
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable(
        'avaliacao_usuario',
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
            onDelete: 'CASCADE',
            allowNull: false
          },
          fk_compromisso: {
            type: Sequelize.INTEGER,
            references: {
              model: 'compromisso',
              key: 'id'
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
