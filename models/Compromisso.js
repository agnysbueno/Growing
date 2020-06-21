const Compromisso = (sequelize, DataTypes) => {
    let compromisso = sequelize.define(
        'Compromisso',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            fk_usuario_consumidor: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_usuario_prestador: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            fk_servico: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            horario_inicio: {
              type: DataTypes.DATE,
              allowNull: false
            },
            horario_fim: {
              type: DataTypes.DATE,
              allowNull: false
            },
            observacoes: {
              type: DataTypes.STRING(500),
              allowNull: true
            }
        }, 
        { 
            tableName: "Compromisso",
            timestamps: false 
        }
    );

    compromisso.associate = (models) => {
        
        // compromisso.hasOne(models.AvaliacaoUsuario, {
        //     foreignKey:'fk_compromisso', as: 'avaliacao_usuario'
        // });

        compromisso.belongsTo(models.Usuario, {
            foreignKey:'fk_usuario_consumidor', as: 'usuario_consumidor'
        });

        // compromisso.hasOne(models.AvaliacaoServico, {
        //     foreignKey:'fk_compromisso', as: 'avaliacao_servico'
        // });

        compromisso.belongsTo(models.UsuarioServicoEspecifico, {
            targetKey:'fk_servico', as: 'servico',
            targetKey: 'fk_usuario', as :'usuario_prestador'
        });

        // compromisso.belongsTo(models.UsuarioServicoEspecifico, {
        //     foreignKey:'fk_usuario_prestador', as: 'usuario_prestador'
        // });

    };

    return compromisso;
}

module.exports = Compromisso;