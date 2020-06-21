'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.removeColumn('compromisso', 'fk_avaliacao')
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('compromisso', 'fk_avaliacao', {
        type: Sequelize.INTEGER,
        references: {
          model: 'avaliacao_servico',
          key: 'fk_servico'
        },
        after: "fk_servico"
      })
    ])
  }
};