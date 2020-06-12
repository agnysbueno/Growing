const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nome_completo: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            nome_social: {
                type: DataTypes.STRING(40),
                allowNull: true
            },
            genero: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            cpf: {
                type: DataTypes.STRING(14),
                allowNull: true,
                unique: true
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            foto_perfil: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            descricao_bio: {
                type: DataTypes.STRING(500),
                allowNull: true
            }
        }, 
        { 
            tableName: "usuario",
            timestamps: false 
        }
    );

    usuario.associate = (models) => {
        
        usuario.hasOne(models.DadoProfissional, {
            foreignKey:'fk_usuario', as: 'dado_profissional'
        });

        usuario.hasMany(models.Contato, {
            foreignKey:'fk_usuario', as: 'contatos'
        });

        usuario.hasMany(models.Endereco, {
            foreignKey:'fk_usuario', as: 'enderecos'
        });

        usuario.hasMany(models.Post, {
            foreignKey:'id', as: 'Post'
        });

        // usuario.hasMany(models.Comentario, {
        //     foreignKey:'fk_usuario', as: 'Comentario'
        // });

        usuario.hasMany(models.RegistroPortfolio, {
            foreignKey:'fk_usuario', as: 'registros'
        });

        usuario.belongsToMany(models.ServicoGeral, {
            through: "UsuarioServicoGeral",
            foreignKey:'fk_usuario',
            as: 'servicos_gerais'
        });

        usuario.belongsToMany(models.ServicoEspecifico, {
            through: "UsuarioServicoEspecifico",
            foreignKey:'fk_usuario',
            as: 'servicos_especificos'
        });

        usuario.belongsToMany(models.Produto, {
            through: "UsuarioProduto",
            foreignKey:'fk_usuario',
            as: 'produtos'
        });

        usuario.hasMany(models.Compromisso, {
            foreignKey:'fk_usuario_consumidor', as: 'compromissos'
        });

        usuario.hasMany(models.AvaliacaoUsuario, {
            foreignKey:'fk_usuario', as: 'avaliacoes'
        });
    };

    return usuario;
}

module.exports = Usuario;