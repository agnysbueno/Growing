const RegistroPortfolio = (sequelize, DataTypes) => {
    let registroPortfolio = sequelize.define(
        'RegistroPortfolio',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            descricao: {
              type: Sequelize.STRING(300),
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
        },
        { 
            tableName: "registro_portfolio",
            timestamps: false 
        }
    );

    registroPortfolio.associate = (models) => {
        
        registroPortfolio.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });
        registroPortfolio.hasMany(models.ImagemPortfolio, {
            foreignKey:'fk_registro_portfolio', as: 'imagens'
        });

    };

    return registroPortfolio;
}

module.exports = RegistroPortfolio;