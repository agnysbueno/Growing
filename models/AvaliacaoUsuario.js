const AvaliacaoUsuario = (sequelize, DataTypes) => {
    let avaliacaoUsuario = sequelize.define(
        'AvaliacaoUsuario',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_compromisso: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            nota: {
              type: DataTypes.INTEGER,
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
            foreignKey:'fk_usuario', as: 'Usuario'
        });
        
        avaliacaoUsuario.belongsTo(models.Compromisso, {
            foreignKey:'fk_compromisso', as: 'Compromisso'
        });

    };

    return avaliacaoUsuario;
}

module.exports = AvaliacaoUsuario;