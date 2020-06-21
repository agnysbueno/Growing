'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('registro_portfolio', 'fk_servico_geral',{
        type: Sequelize.INTEGER,
      references: {
        model: 'servico_geral',
        key: 'id',
        after: 'fk_usuario'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.removeColumn('registro_portfolio', 'fk_servico_geral')
   ])
  }
};
