'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var usuarioProdutos = [];
    var fakeUsuarioProduto = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeUsuarioProduto = {
        id: fakeId,
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
        fk_produto: faker.random.number({'min': 1, 'max': 30}),
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      }
      usuarioProdutos.push(fakeUsuarioProduto);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('usuario_produto', usuarioProdutos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario_produto', null, {});
  }
};
