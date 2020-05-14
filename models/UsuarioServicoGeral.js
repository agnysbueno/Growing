const UsuarioServicoGeral = (sequelize, DataTypes) => {
    let usuarioServicoGeral = sequelize.define(
        'UsuarioServicoGeral',
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
            }
        },
        { 
            tableName: "usuario_servico_geral",
            timestamps: false 
        }
    );

    return usuarioServicoGeral;
}

module.exports = UsuarioServicoGeral;