const ServicoGeral = (sequelize, DataTypes) => {
    let servicoGeral = sequelize.define(
        'ServicoGeral',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            servico: {
              type: Sequelize.STRING(50),
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
            foreignKey:'fk_servico',
            as: 'usuario'
        });

        servicoGeral.hasMany(models.ServicoEspecifico, {
            foreignKey:'fk_servico_geral', as: 'servicos_especificos'
        });

    };

    return servicoGeral;
}

module.exports = ServicoGeral;