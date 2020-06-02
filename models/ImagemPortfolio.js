const ImagemPortfolio = (sequelize, DataTypes) => {
    let imagemPortfolio = sequelize.define(
        'ImagemPortfolio',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            imagem: {
              type: DataTypes.BLOB('long'),
              allowNull: false
            },
            fk_registro_portfolio: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "imagem_portfolio",
            timestamps: false 
        }
    );

    imagemPortfolio.associate = (models) => {
        
        imagemPortfolio.belongsTo(models.Usuario, {
            foreignKey:'fk_registro_portfolio', as: 'registro_portfolio'
        });

    };

    return imagemPortfolio;
}

module.exports = ImagemPortfolio;