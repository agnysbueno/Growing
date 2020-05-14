const UsuarioServicoEspecifico = (sequelize, DataTypes) => {
    let usuarioServicoEspecifico = sequelize.define(
        'UsuarioServicoEspecifico',
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
            fk_servico: {
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
            tableName: "usuario_servico_especifico",
            timestamps: false 
        }
    );

    return usuarioServicoEspecifico;
}

module.exports = UsuarioServicoEspecifico;