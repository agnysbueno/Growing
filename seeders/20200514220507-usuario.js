'use strict';

const bcrypt = require('bcrypt');

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {

    var usuarios = [];
    var fakeUsuario = {};
    
    var opcoesGenero = ['F', 'M', 'O']
    
    for (let i=0; i <= 200; i++) {
      fakeUsuario = {
        nome_completo: faker.name.findName(),
        nome_social: faker.name.firstName(),
        genero:faker.random.arrayElement(opcoesGenero),
        cpf: faker.random.number({'min': 10000000000, 'max': 99999999999}),
        data_nascimento: faker.date.past(60, '2002-01-01'),
        email: faker.internet.email(),
        senha: bcrypt.hashSync(faker.internet.password(), 10),
        foto_perfil: faker.internet.avatar(),
        descricao_bio: faker.lorem.paragraphs(1)
      }
      usuarios.push(fakeUsuario);
    }
    
    return queryInterface.bulkInsert('usuario', usuarios, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};
