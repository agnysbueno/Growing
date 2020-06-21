const ServicoEspecifico = (sequelize, DataTypes) => {
    let servicoEspecifico = sequelize.define(
        'ServicoEspecifico',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            servico: {
              type: DataTypes.STRING(100),
              allowNull: false
            },
            fk_servico_geral: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "servico_especifico",
            timestamps: false 
        }
    );

    servicoEspecifico.associate = (models) => {
        
        servicoEspecifico.belongsToMany(models.Usuario, {
            through: models.UsuarioServicoEspecifico,
            foreignKey:'fk_servico',
            as: 'usuario'
        });

        servicoEspecifico.belongsTo(models.ServicoGeral, {
            foreignKey:'fk_servico_geral', as: 'servicos_gerais'
        });

    };

    return servicoEspecifico;
}

module.exports = ServicoEspecifico;