'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('servico_geral', [
        {
          servico: 'Manicure'
        },
        {
          servico: 'Pedicure'
        },
        {
          servico: 'Podologia'
        },
        {
          servico: 'Tintura'
        },
        {
          servico: 'Tratamento capilar'
        },
        {
          servico: 'Alisamento'
        },
        {
          servico: 'Tratamento de pele'
        },
        {
          servico: 'Drenagem'
        },
        {
          servico: 'Massagem'
        },
        {
          servico: 'Depilação'
        },
        {
          servico: 'Maquiagem'
        },
        {
          servico: 'Penteado'
        },
        {
          servico: 'Sobrancelha'
        },
        {
          servico: 'Barba'
        },
        {
          servico: 'Corte feminino'
        },
        {
          servico: 'Corte masculino'
        },
        {
          servico: 'Outro...'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('servico_geral', null, {});
  }
};
