const Contato = (sequelize, DataTypes) => {
    let contato = sequelize.define(
        'Contato',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tipo_contato: {
              type: Sequelize.STRING(30),
              allowNull: false
            },
            telefone: {
              type: Sequelize.STRING(15),
              allowNull: true
            },
            email: {
              type: Sequelize.STRING(60),
              allowNull: true
            },
            fk_usuario: {
              type: Sequelize.INTEGER,
              references: {
                model: 'usuario',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
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