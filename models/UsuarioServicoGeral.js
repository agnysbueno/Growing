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
    usuarioServicoGeral.associate = (models) =>{
      usuarioServicoGeral.belongsTo(models.ServicoGeral, {foreignKey: 'fk_servico', as:'ServicoGeral'});
      //usuarioServicoEspecifico.belongsTo(models.Usuario, {foreignKey:'fk_usuario', as: 'usuario'});
    }
    return usuarioServicoGeral;
}

module.exports = UsuarioServicoGeral;