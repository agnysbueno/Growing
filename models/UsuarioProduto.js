const UsuarioProduto = (sequelize, DataTypes) => {
    let usuarioProduto = sequelize.define(
        'UsuarioProduto',
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
            fk_produto: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            preco: {
              type: DataTypes.DOUBLE(6,2),
              allowNull: false
            },
            imagem: {
              type: DataTypes.STRING(200),
              allowNull: false
            },
            descricao: {
              type: DataTypes.STRING(500),
              allowNull: true
            }
        },
        { 
            tableName: "usuario_produto",
            timestamps: false 
        }
    );

    return usuarioProduto;
}

module.exports = UsuarioProduto;