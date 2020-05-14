const Post = (sequelize, DataTypes) => {
    let post = sequelize.define(
        'Post',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            texto: {
              type: Sequelize.STRING(500),
              allowNull: false
            },
            data_postagem: {
              type: Sequelize.DATE,
              allowNull: false
            },
            imagem: {
              type: Sequelize.STRING(200),
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
            tableName: "post",
            timestamps: false 
        }
    );

    post.associate = (models) => {
        
        post.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario', as: 'usuario'
        });
        post.hasMany(models.Comentario, {
            foreignKey:'fk_post', as: 'comentarios'
        });

    };

    return post;
}

module.exports = Post;