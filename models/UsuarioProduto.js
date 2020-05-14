const UsuarioProduto = (sequelize, DataTypes) => {
    let usuarioProduto = sequelize.define(
        'UsuarioProduto',
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
            fk_produto: {
              type: Sequelize.INTEGER,
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
        },
        { 
            tableName: "usuario_produto",
            timestamps: false 
        }
    );

    return usuarioProduto;
}

module.exports = UsuarioProduto;