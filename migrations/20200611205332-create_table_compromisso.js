'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'compromisso',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        fk_usuario_consumidor: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
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
        horario_inicio: {
          type: Sequelize.DATE,
          allowNull: false
        },
        horario_fim: {
          type: Sequelize.DATE,
          allowNull: false
        },
        observacoes: {
          type: Sequelize.STRING(500),
          allowNull: true
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('compromisso');
  }
};