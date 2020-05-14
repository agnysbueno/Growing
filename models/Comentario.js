const Comentario = (sequelize, DataTypes) => {
    let comentario = sequelize.define(
        'Comentario',
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
            data_comentario: {
              type: Sequelize.DATE,
              allowNull: false
            },
            imagem: {
              type: Sequelize.STRING(200),
              allowNull: true
            },
            fk_post: {
              type: Sequelize.INTEGER,
              allowNull: false
            },
            fk_usuario: {
              type: Sequelize.INTEGER,
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
            foreignKey:'fk_usuario', as: 'usuario'
        });
        comentario.belongsTo(models.Post, {
            foreignKey:'fk_post', as: 'post'
        });

    };

    return comentario;
}

module.exports = Comentario;