'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuario_servico_especifico', [
      {
        id: 1,
        fk_usuario: 186,
        fk_servico: 41,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 2,
        fk_usuario: 105,
        fk_servico: 73,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 3,
        fk_usuario: 194,
        fk_servico: 27,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 4,
        fk_usuario: 174,
        fk_servico: 36,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 5,
        fk_usuario: 141,
        fk_servico: 73,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 6,
        fk_usuario: 167,
        fk_servico: 52,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 7,
        fk_usuario: 159,
        fk_servico: 65,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 8,
        fk_usuario: 49,
        fk_servico: 69,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 9,
        fk_usuario: 5,
        fk_servico: 62,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 10,
        fk_usuario: 188,
        fk_servico: 28,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 11,
        fk_usuario: 127,
        fk_servico: 25,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 12,
        fk_usuario: 157,
        fk_servico: 60,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 13,
        fk_usuario: 180,
        fk_servico: 72,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 14,
        fk_usuario: 42,
        fk_servico: 48,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 15,
        fk_usuario: 79,
        fk_servico: 7,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 16,
        fk_usuario: 66,
        fk_servico: 27,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 17,
        fk_usuario: 126,
        fk_servico: 28,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 18,
        fk_usuario: 28,
        fk_servico: 57,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 19,
        fk_usuario: 107,
        fk_servico: 66,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
      {
        id: 20,
        fk_usuario: 138,
        fk_servico: 71,
        preco: faker.finance.amount(5.00,1999,2),
        imagem: faker.image.fashion(),
        descricao: faker.lorem.paragraphs(1),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario_servico_especifico', null, {});
  }
};
