'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('servico_geral', [
        {
          id: 1,
          servico: 'Barba'
        },
        {
          id: 2,
          servico: 'Maquiagem'
        },
        {
          id: 3,
          servico: 'Manicure'
        },
        {
          id: 4,
          servico: 'Cabelo'
        },
        {
          id: 5,
          servico: 'Depilação'
        },
        {
          id: 6,
          servico: 'Massagem'
        },
        {
          id: 7,
          servico: 'Sobrancelha'
        },
        {
          id: 8,
          servico: 'Limpeza de pele'
        },
        {
          id: 9,
          servico: 'Outros'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('servico_geral', null, {});
  }
};
