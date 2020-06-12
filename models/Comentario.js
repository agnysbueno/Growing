const Comentario = (sequelize, DataTypes) => {
    let comentario = sequelize.define(
        'Comentario',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            texto: {
              type: DataTypes.STRING(500),
              allowNull: false
            },
            data_comentario: {
              type: DataTypes.DATE,
              allowNull: false
            },
            imagem: {
              type: DataTypes.STRING(200),
              allowNull: true
            },
            fk_post: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "comentario",
            timestamps: false 
        }
    );

    comentario.associate = (models) => {
        
        comentario.belongsTo(models.Usuario, {
            foreignKey:'id', as: 'Usuario'
        });
        comentario.belongsTo(models.Post, {
            foreignKey:'id', as: 'Post'
        });

    };

    return comentario;
}

module.exports = Comentario;