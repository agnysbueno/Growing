'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
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
        type: Sequelize.DATEONLY,
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('usuario');
  }
};
