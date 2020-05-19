const ServicoGeral = (sequelize, DataTypes) => {
    let servicoGeral = sequelize.define(
        'ServicoGeral',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            servico: {
              type: DataTypes.STRING(50),
              allowNull: false
            },
        },
        { 
            tableName: "servico_geral",
            timestamps: false 
        }
    );

    servicoGeral.associate = (models) => {
        
        servicoGeral.belongsToMany(models.Usuario, {
            through: "UsuarioServicoGeral",
            foreignKey:'fk_usuario',
            as: 'usuario'
        });

        servicoGeral.hasMany(models.ServicoEspecifico, {
            foreignKey:'fk_servico_geral', as: 'servicos_especificos'
        });

    };

    return servicoGeral;
}

module.exports = ServicoGeral;