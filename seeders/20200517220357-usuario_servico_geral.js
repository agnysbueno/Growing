'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var usuarioServicosGerais = [];
    var fakeUsuarioServicoGeral = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeUsuarioServicoGeral = {
        id: fakeId,
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
        fk_servico: faker.random.number({'min': 1, 'max': 9}),
      }
      usuarioServicosGerais.push(fakeUsuarioServicoGeral);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('usuario_servico_geral', usuarioServicosGerais, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario_servico_geral', null, {});
  }
};
