'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var usuarioServicosEspecificos = [];
    var fakeUsuarioServicoEspecifico = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakeUsuarioServicoEspecifico = {
        id: fakeId,
        fk_usuario: faker.random.number({'min': 1, 'max': 200}),
        fk_servico: faker.random.number({'min': 1, 'max': 17}),
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      }
      usuarioServicosEspecificos.push(fakeUsuarioServicoEspecifico);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('usuario_servico_especifico', usuarioServicosEspecificos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario_servico_especifico', null, {});
  }
};
