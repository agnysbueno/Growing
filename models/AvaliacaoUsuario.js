const AvaliacaoUsuario = (sequelize, DataTypes) => {
    let avaliacaoUsuario = sequelize.define(
        'AvaliacaoUsuario',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_compromisso: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            nota: {
              type: Sequelize.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "avaliacao_usuario",
            timestamps: false 
        }
    );

    avaliacaoUsuario.associate = (models) => {
        
        avaliacaoUsuario.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });
        
        avaliacaoUsuario.belongsTo(models.Compromisso, {
            foreignKey:'fk_compromisso', as: 'compromisso'
        });

    };

    return avaliacaoUsuario;
}

module.exports = AvaliacaoUsuario;