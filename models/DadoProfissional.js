const DadoProfissional = (sequelize, DataTypes) => {
    let dadoProfissional = sequelize.define(
        'DadoProfissional',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            cnpj: {
              type: Sequelize.STRING(18),
              allowNull: false
            },
            razao_social: {
              type: Sequelize.STRING(150),
              allowNull: true
            },
            nome_fantasia: {
              type: Sequelize.STRING(80),
              allowNull: true
            },
            inscricao_estadual: {
              type: Sequelize.STRING(14),
              allowNull: false,
            },
            inscricao_municipal: {
              type: Sequelize.STRING(14),
              allowNull: true
            },
            fk_usuario: {
              type: Sequelize.INTEGER,
              allowNull: false
            }
        }, 
        { 
            tableName: "dado_profissional",
            timestamps: false 
        }
    );

    dadoProfissional.associate = (models) => {
        
        dadoProfissional.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });

    };

    return dadoProfissional;
}

module.exports = DadoProfissional;