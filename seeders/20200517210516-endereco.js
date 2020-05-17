'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var enderecos = [];
    var fakeEndereco = {};

    var opcoesEndereco = ['Residencial', 'Comercial'];

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeEndereco = {
        id: fakeId,
        tipo_endereco: faker.random.arrayElement(opcoesEndereco),
        tipo_logradouro: faker.address.streetSuffix(),
        logradouro: faker.address.streetPrefix(),
        numero: faker.random.number({'min': 1, 'max': 999999}),
        complemento: faker.address.secondaryAddress(),
        bairro: faker.name.lastName(),
        cep: faker.random.number({'min': 1000000, 'max': 9999999}),
        municipio: faker.address.city(1),
        uf: faker.address.stateAbbr(),
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
      }
      enderecos.push(fakeEndereco);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('endereco', enderecos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('endereco', null, {});
  }
};
