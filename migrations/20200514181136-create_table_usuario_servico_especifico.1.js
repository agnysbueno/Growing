'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuario_servico_especifico',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        fk_usuario: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        },
        fk_servico: {
          type: Sequelize.INTEGER,
          references: {
            model: 'servico_especifico',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        },
        preco: {
          type: Sequelize.DOUBLE(6,2),
          allowNull: false
        },
        imagem: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING(500),
          allowNull: true
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_servico_especifico');
  }
};
