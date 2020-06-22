'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
    queryInterface.removeColumn('compromisso', 'fk_usuario_prestador'),
    queryInterface.removeColumn('compromisso', 'fk_servico'),
    queryInterface.addColumn('compromisso', 'fk_usuario_servico_especifico',{
      type: Sequelize.INTEGER,
      references: {
        model: 'usuario_servico_especifico',
        key: 'id'
      },
      after: 'fk_usuario_consumidor',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    }),
    queryInterface.addColumn('compromisso', 'date',{
      type: Sequelize.DATE,
      allowNull: false,
      after: 'fk_usuario_servico_especifico'
    }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
    queryInterface.removeColumn('compromisso', 'fk_usuario_servico_especifico'),
    queryInterface.addColumn('compromisso', 'fk_servico',{
      type: Sequelize.INTEGER,
        references: {
          model: 'usuario_servico_especifico',
          key: 'fk_servico'
        },
        after: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    }),
    queryInterface.addColumn('compromisso', 'fk_usuario_prestador', {
      type: Sequelize.INTEGER,
      references: {
        model: 'usuario_servico_especifico',
        key: 'fk_usuario'
      },
      after: 'fk_servico',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    }),
    queryInterface.removeColumn('compromisso', 'date')
    ])
  }
};