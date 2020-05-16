const Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define(
        'Endereco',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tipo_endereco: {
              type: DataTypes.STRING(30),
              allowNull: false
            },
            tipo_logradouro: {
              type: DataTypes.STRING(20),
              allowNull: false
            },
            logradouro: {
              type: DataTypes.STRING(30),
              allowNull: false
            },
            numero: {
              type: DataTypes.STRING(10),
              allowNull: true
            },
            complemento: {
              type: DataTypes.STRING(50),
              allowNull: true
            },
            bairro: {
              type: DataTypes.STRING(40),
              allowNull: false
            },
            cep: {
              type: DataTypes.STRING(9),
              allowNull: false
            },
            municipio: {
              type: DataTypes.STRING(30),
              allowNull: false
            },
            uf: {
              type: DataTypes.STRING(2),
              allowNull: false
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
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