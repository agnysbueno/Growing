'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var registrosPortfolio = [];
    var fakeRegistro = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeRegistro = {
        id: fakeId,
        descricao: faker.lorem.words(30),
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
      }
      registrosPortfolio.push(fakeRegistro);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('registro_portfolio', registrosPortfolio, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registro_portfolio', null, {});
  }
};
