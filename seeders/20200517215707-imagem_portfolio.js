'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var imagensPortfolio = [];
    var fakeImagem = {};

    var fakeId = 0;
    
    for (let i=0; i <= 1200; i++) {

      fakeImagem = {
        id: fakeId,
        imagem: faker.image.fashion(),
        fk_registro_portfolio: faker.random.number({'min': 1, 'max': 600}),
      }
      imagensPortfolio.push(fakeImagem);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('imagem_portfolio', imagensPortfolio, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('imagem_portfolio', null, {});
  }
};
