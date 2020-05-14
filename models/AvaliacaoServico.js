const AvaliacaoServico = (sequelize, DataTypes) => {
    let avaliacaoServico = sequelize.define(
        'AvaliacaoServico',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario_prestador: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_servico: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            nota: {
              type: Sequelize.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "avaliacao_servico",
            timestamps: false 
        }
    );

    avaliacaoServico.associate = (models) => {
        
        avaliacaoServico.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario_prestador', as: 'usuario_prestador'
        });
        
        avaliacaoServico.belongsTo(models.Compromisso, {
            foreignKey:'fk_compromisso', as: 'compromisso'
        });

    };

    return avaliacaoServico;
}

module.exports = AvaliacaoServico;