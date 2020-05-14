const Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define(
        'Endereco',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tipo_endereco: {
              type: Sequelize.STRING(30),
              allowNull: false
            },
            tipo_logradouro: {
              type: Sequelize.STRING(20),
              allowNull: false
            },
            logradouro: {
              type: Sequelize.STRING(30),
              allowNull: false
            },
            numero: {
              type: Sequelize.STRING(10),
              allowNull: true
            },
            complemento: {
              type: Sequelize.STRING(50),
              allowNull: true
            },
            bairro: {
              type: Sequelize.STRING(40),
              allowNull: false
            },
            cep: {
              type: Sequelize.STRING(9),
              allowNull: false
            },
            municipio: {
              type: Sequelize.STRING(30),
              allowNull: false
            },
            uf: {
              type: Sequelize.STRING(2),
              allowNull: false
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
            tableName: "endereco",
            timestamps: false 
        }
    );

    endereco.associate = (models) => {
        
        endereco.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });

    };

    return endereco;
}

module.exports = Endereco;