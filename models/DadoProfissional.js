const DadoProfissional = (sequelize, DataTypes) => {
    let dadoProfissional = sequelize.define(
        'DadoProfissional',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            cnpj: {
              type: DataTypes.STRING(18),
              allowNull: false
            },
            razao_social: {
              type: DataTypes.STRING(150),
              allowNull: true
            },
            nome_fantasia: {
              type: DataTypes.STRING(80),
              allowNull: true
            },
            inscricao_estadual: {
              type: DataTypes.STRING(14),
              allowNull: false,
            },
            inscricao_municipal: {
              type: DataTypes.STRING(14),
              allowNull: true
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
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