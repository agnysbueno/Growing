'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var dadosProfissionais = [];
    var fakeDado = {};
    
    for (let i=0; i <= 100; i++) {

      var fakeDigitos = faker.random.number({'min': 10000000000000, 'max': 99999999999999}).toString();
      var fakeCNPJ = `${fakeDigitos.slice(0, 2)}.${fakeDigitos.slice(2, 5)}.${fakeDigitos.slice(5, 8)}/${fakeDigitos.slice(8, 12)}-${fakeDigitos.slice(12, 14)}`

      fakeDado = {

        cnpj: fakeCNPJ,
        razao_social: faker.company.companyName(0),
        nome_fantasia: faker.name.lastName(),
        inscricao_estadual: faker.random.number({'min': 100000000, 'max': 999999999}),
        inscricao_municipal: faker.random.number({'min': 10000000, 'max': 99999999}),
        fk_usuario: faker.random.number({'min': 52, 'max': 204}),
      }
      dadosProfissionais.push(fakeDado);
    }
    
    return queryInterface.bulkInsert('dado_profissional', dadosProfissionais, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dado_profissional', null, {});
  }
};
