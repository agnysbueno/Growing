const ServicoEspecifico = (sequelize, DataTypes) => {
    let servicoEspecifico = sequelize.define(
        'ServicoEspecifico',
,
        { 
            tableName: "servico_especifico",
            timestamps: false 
        }
    );

    servicoEspecifico.associate = (models) => {
        
        servicoEspecifico.belongsToMany(models.Usuario, {
            through: "UsuarioServicoEspecifico",
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