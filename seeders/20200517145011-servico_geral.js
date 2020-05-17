'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('servico_geral', [
        {
          id: 1,
          servico: 'Manicure'
        },
        {
          id: 2,
          servico: 'Pedicure'
        },
        {
          id: 3,
          servico: 'Podologia'
        },
        {
          id: 4,
          servico: 'Tintura'
        },
        {
          id: 5,
          servico: 'Tratamento capilar'
        },
        {
          id: 6,
          servico: 'Alisamento'
        },
        {
          id: 7,
          servico: 'Tratamento de pele'
        },
        {
          id: 8,
          servico: 'Drenagem'
        },
        {
          id: 9,
          servico: 'Massagem'
        },
        {
          id: 10,
          servico: 'Depilação'
        },
        {
          id: 11,
          servico: 'Maquiagem'
        },
        {
          id: 12,
          servico: 'Penteado'
        },
        {
          id: 13,
          servico: 'Sobrancelha'
        },
        {
          id: 14,
          servico: 'Barba'
        },
        {
          id: 15,
          servico: 'Corte feminino'
        },
        {
          id: 16,
          servico: 'Corte masculino'
        },
        {
          id: 17,
          servico: 'Outro...'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('servico_geral', null, {});
  }
};
