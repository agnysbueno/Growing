'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
      var comentarios = [];
      var fakeComentario = {};

      var fakeId = 54;

      for (let i=54; i <= 2400; i++) {

        fakeComentario = {
          id: fakeId,
          texto: faker.lorem.words(16),
          data_comentario: faker.date.past(1, '2020-05-17'),
          imagem: "",
          fk_post: faker.random.number({'min': 54, 'max': 600}),
          fk_usuario: faker.random.number({'min': 54, 'max': 200}),
        }
        comentarios.push(fakeComentario);
        fakeId+=1;
      }
      
      return queryInterface.bulkInsert('comentario', comentarios, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comentario', null, {});
  }
};
