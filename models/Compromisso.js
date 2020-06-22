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
            fk_usuario_servico_especifico: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            date: {
              type: DataTypes.DATE,
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
            foreignKey:'fk_usuario_servico_especifico', as: 'usuarioservicoespecifico'
        });

        // compromisso.belongsTo(models.UsuarioServicoEspecifico, {
        //     foreignKey:'fk_usuario_prestador', as: 'usuario_prestador'
        // });

    };

    return compromisso;
}

module.exports = Compromisso;