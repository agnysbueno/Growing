'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentario',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        texto: {
          type: Sequelize.STRING(500),
          allowNull: false
        },
        data_comentario: {
          type: Sequelize.DATE,
          allowNull: false
        },
        imagem: {
          type: Sequelize.STRING(200),
          allowNull: true
        },
        fk_post: {
          type: Sequelize.INTEGER,
          references: {
            model: 'post',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comentario');
  }
};
