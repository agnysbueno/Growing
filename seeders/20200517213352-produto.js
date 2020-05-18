'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('produto', [
      {
        id: 1,
        tipo_produto: 'Creme de pentear'
      },
      {
        id: 2,
        tipo_produto: 'Mousse para cabelo'
      },
      {
        id: 3,
        tipo_produto: 'Máscara capilar'
      },
      {
        id: 4,
        tipo_produto: 'Máscara facial'
      },
      {
        id: 5,
        tipo_produto: 'Creme para barbear'
      },
      {
        id: 6,
        tipo_produto: 'Esmalte'
      },
      {
        id: 7,
        tipo_produto: 'Iluminador'
      },
      {
        id: 8,
        tipo_produto: 'Batom'
      },
      {
        id: 9,
        tipo_produto: 'Delineador'
      },
      {
        id: 10,
        tipo_produto: 'Finalizador de cachos'
      },
      {
        id: 11,
        tipo_produto: 'Base facial'
      },
      {
        id: 12,
        tipo_produto: 'Protetor térmico'
      },
      {
        id: 13,
        tipo_produto: 'Rímel'
      },
      {
        id: 14,
        tipo_produto: 'Reparador de pontas'
      },
      {
        id: 15,
        tipo_produto: 'Shampoo'
      },
      {
        id: 16,
        tipo_produto: 'Condicionador'
      },
      {
        id: 17,
        tipo_produto: 'Loção capilar'
      },
      {
        id: 18,
        tipo_produto: 'Fortalecedor de unha'
      },
      {
        id: 19,
        tipo_produto: 'Amolecedor de cutícula'
      },
      {
        id: 20,
        tipo_produto: 'Hidratante para pés'
      },
      {
        id: 21,
        tipo_produto: 'Óleo corporal'
      },
      {
        id: 22,
        tipo_produto: 'Creme corporal'
      },
      {
        id: 23,
        tipo_produto: 'Pós barba'
      },
      {
        id: 24,
        tipo_produto: 'Demaquilante'
      },
      {
        id: 25,
        tipo_produto: 'Sombra para os olhos'
      },
      {
        id: 26,
        tipo_produto: 'Blush'
      },
      {
        id: 27,
        tipo_produto: 'Pó facial'
      },
      {
        id: 28,
        tipo_produto: 'Corretor facial'
      },
      {
        id: 29,
        tipo_produto: 'Pincéis para maquiagem'
      },
      {
        id: 30,
        tipo_produto: 'Tonalizante'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produto', null, {});
  }
};
