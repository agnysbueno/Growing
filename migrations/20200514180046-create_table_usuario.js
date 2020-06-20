'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuario',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        nome_completo: {
          type: Sequelize.STRING(80),
          allowNull: false
        },
        nome_social: {
          type: Sequelize.STRING(40),
          allowNull: true
        },
        genero: {
          type: Sequelize.STRING(1),
          allowNull: true
        },
        cpf: {
          type: Sequelize.STRING(14),
          allowNull: true,
          unique: true
        },
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: true
        },
        email: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: true
        },
        senha: {
          type: Sequelize.STRING(256),
          allowNull: false
        },
        foto_perfil: {
          type: Sequelize.STRING(200),
          allowNull: true
        },
        descricao_bio: {
          type: Sequelize.STRING(500),
          allowNull: true
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
