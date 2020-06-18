const Compromisso = (sequelize, DataTypes) => {
    let compromisso = sequelize.define(
        'Compromisso',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario_consumidor: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_usuario_prestador: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_servico: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_avaliacao: {
              type: DataTypes.INTEGER,
              allowNull: true
            },
            horario_inicio: {
              type: DataTypes.DATE,
              allowNull: false
            },
            horario_fim: {
              type: DataTypes.DATE,
              allowNull: false
            },
            observacoes: {
              type: DataTypes.STRING(500),
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