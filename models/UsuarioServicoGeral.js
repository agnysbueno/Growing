const UsuarioServicoGeral = (sequelize, DataTypes) => {
    let usuarioServicoGeral = sequelize.define(
        'UsuarioServicoGeral',
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
            fk_servico: {
              type: DataTypes.INTEGER,
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