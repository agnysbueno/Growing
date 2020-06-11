const Post = (sequelize, DataTypes) => {
    let post = sequelize.define(
        'Post',
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
            data_postagem: {
              type: DataTypes.DATE,
              allowNull: false
            },
            imagem: {
              type: DataTypes.STRING(200),
              allowNull: true
            },
            fk_usuario: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "post",
            timestamps: false 
        }
    );

    post.associate = (models) => {
        post.hasMany(models.Usuario, { foreignKey:'id', as: 'Usuario' });
<<<<<<< HEAD
        post.belongsTo(models.Comentario, { foreignKey:'id', as: 'Comentario' });
=======
        post.hasMany(models.Comentario, {
          foreignKey:'fk_post', as: 'comentarios'
        });
>>>>>>> 4884f26722724d26ba9f82eb59d23c1a615f7508

    };

    return post;
}

module.exports = Post;