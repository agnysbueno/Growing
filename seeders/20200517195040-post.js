'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var posts = [];
    var fakePost = {};
    
    for (let i=0; i <= 600; i++) {

      fakePost = {

        texto: faker.lorem.paragraphs(1),
        data_postagem: faker.date.past(1, '2020-05-17'),
        imagem: faker.image.fashion(),
        fk_usuario: faker.random.number({'min': 52, 'max': 204}),
      }
      posts.push(fakePost);
    }
    
    return queryInterface.bulkInsert('post', posts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post', null, {});
  }
};
