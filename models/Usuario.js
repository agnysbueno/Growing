const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nome_completo: {
                type: Sequelize.STRING(80),
                allowNull: false
            },
            nome_social: {
                type: Sequelize.STRING(40),
                allowNull: true
            },
            genero: {
                type: Sequelize.STRING(1),
                allowNull: true
            },
            cpf: {
                type: Sequelize.STRING(14),
                allowNull: true,
                unique: true
            },
            data_nascimento: {
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            email: {
                type: Sequelize.STRING(60),
                allowNull: false,
                unique: true
            },
            senha: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            foto_perfil: {
                type: Sequelize.STRING(200),
                allowNull: true
            },
            descricao_bio: {
                type: Sequelize.STRING(500),
                allowNull: true
            }
        }, 
        { 
            tableName: "usuario",
            timestamps: false 
        }
    );

    // usuario.associate = (models) => {
        
    //     usuario.hasMany(models.Endereco, {
    //         foreignKey:'fk_usuario', as: 'enderecos'
    //     });

    //     usuario.hasMany(models.Contato, {
    //         foreignKey:'fk_usuario', as: 'contatos'
    //     });

    //     usuario.hasOne(models.DadoProfissional, {
    //         foreignKey:'fk_usuario', as: 'dado profissional'
    //     });

    //     usuario.hasMany(models.Post, {
    //         foreignKey:'fk_usuario', as: 'posts'
    //     });

    //     usuario.hasMany(models.RegistroPortfolio, {
    //         foreignKey:'fk_usuario', as: 'registros'
    //     });

    //     usuario.hasMany(models.Compromisso, {
    //         foreignKey:'fk_cliente', as: 'compromissos'
    //     });

    //     usuario.hasMany(models.ServicosGerais, {
    //         foreignKey:'fk_usuario', as: 'preferencias'
    //     });
    // };

    return usuario;
}

module.exports = Usuario;