'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {

    var contatos = [];
    var fakeContato = {};

    var opcoesContato = ['Residencial', 'Comercial', 'Pessoal'];

    var fakeId = 0;
    
    for (let i=0; i <= 200; i++) {

      var fakeDDD = faker.random.number({'min': 11, 'max': 42}).toString();
      var fakeNumber = faker.random.number({'min': 10000000, 'max': 99999999}).toString();
      var fakeTelefone = `(${fakeDDD}) 9${fakeNumber.slice(0, 4)}-${fakeNumber.slice(4, 8)}`

      fakeContato = {
        id: fakeId,
        tipo_contato: faker.random.arrayElement(opcoesContato),
        telefone: fakeTelefone,
        email: faker.internet.email(),
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
      }
      contatos.push(fakeContato);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('contato', contatos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contato', null, {});
  }
};
