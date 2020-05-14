const Compromisso = (sequelize, DataTypes) => {
    let compromisso = sequelize.define(
        'Compromisso',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario_consumidor: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_usuario_prestador: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_servico: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_avaliacao: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            horario_inicio: {
              type: Sequelize.DATE,
              allowNull: false
            },
            horario_fim: {
              type: Sequelize.DATE,
              allowNull: false
            },
            observacoes: {
              type: Sequelize.STRING(500),
              allowNull: true
            }
        }, 
        { 
            tableName: "Compromisso",
            timestamps: false 
        }
    );

    compromisso.associate = (models) => {
        
        compromisso.hasOne(models.AvaliacaoUsuario, {
            foreignKey:'fk_compromisso', as: 'avaliacao_usuario'
        });

        compromisso.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario_consumidor', as: 'usuario_consumidor'
        });

        compromisso.belongsTo(models.AvaliacaoServico, {
            foreignKey:'fk_avaliacao', as: 'avaliacao_servico'
        });

        compromisso.belongsTo(models.UsuarioServicoEspecifico, {
            foreignKey:'fk_servico', as: 'servico'
        });

        compromisso.belongsTo(models.UsuarioServicoEspecifico, {
            foreignKey:'fk_usuario_prestador', as: 'usuario_prestador'
        });

    };

    return compromisso;
}

module.exports = Compromisso;