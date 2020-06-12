'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    var posts = [];
    var fakePost = {};

    var fakeId = 0;
    
    for (let i=0; i <= 600; i++) {

      fakePost = {
        id: fakeId,
        texto: faker.lorem.paragraphs(1),
        data_postagem: faker.date.past(1, '2020-05-17'),
        imagem: faker.image.fashion(),
        fk_usuario: faker.random.number({'min': 54, 'max': 200}),
      }
      posts.push(fakePost);
      fakeId+=1;
    }
    
    return queryInterface.bulkInsert('post', posts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post', null, {});
  }
};
