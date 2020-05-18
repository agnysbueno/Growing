'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var avaliacaoUsuarios = [];
    var fakeAvaliacaoUsuario = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeAvaliacaoUsuario = {
        id: fakeId,
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
        fk_compromisso: faker.random.number({'min': 1, 'max': 20}),
        nota: faker.random.number({'min': 1, 'max': 5}),
      }
      avaliacaoUsuarios.push(fakeAvaliacaoUsuario);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('avaliacao_usuario', avaliacaoUsuarios, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('avaliacao_usuario', null, {});
  }
};
