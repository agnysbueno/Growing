const Contato = (sequelize, DataTypes) => {
    let contato = sequelize.define(
        'Contato',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tipo_contato: {
              type: DataTypes.STRING(30),
              allowNull: false
            },
            telefone: {
              type: DataTypes.STRING(15),
              allowNull: true
            },
            email: {
              type: DataTypes.STRING(60),
              allowNull: true
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "contato",
            timestamps: false 
        }
    );

    contato.associate = (models) => {
        
        contato.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });

    };

    return contato;
}

module.exports = Contato;