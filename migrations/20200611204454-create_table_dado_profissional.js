'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'dado_profissional',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        cnpj: {
          type: Sequelize.STRING(18),
          allowNull: false
        },
        razao_social: {
          type: Sequelize.STRING(150),
          allowNull: true
        },
        nome_fantasia: {
          type: Sequelize.STRING(80),
          allowNull: true
        },
        inscricao_estadual: {
          type: Sequelize.STRING(14),
          allowNull: false,
        },
        inscricao_municipal: {
          type: Sequelize.STRING(14),
          allowNull: true
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
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dado_profissional');
  }
};