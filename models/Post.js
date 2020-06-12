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
        post.belongsTo(models.Usuario, { foreignKey:'fk_usuario', as: 'Usuario' });
        post.hasMany(models.Comentario, { foreignKey:'fk_post', as: 'Comentario' });

    };

    return post;
}

module.exports = Post;