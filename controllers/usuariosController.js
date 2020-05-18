let {sequelize, Usuario, ServicoGeral, UsuarioServicoGeral } = require("../models");
const multer = require('multer');
const { Op } = require("sequelize");
const usuariosController = {
    perfil: async(req, res) =>{
        let usuarioLog = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id: usuarioLog.id }});
        res.render('perfil', {title: 'Usuário', usuario});
    }, 
    atualizar:async(req, res) =>{
        let { id, nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio } = req.body;
        await Usuario.update({  nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio }, {
            where: { id }
        });
        let userUpdated = await Usuario.findAll({ where: { id }});
        res.send(userUpdated);  
    },
    atualPerfil:async(req, res) => {
        let { id } = req.body;
        let { files } = req;
        await Usuario.update({  foto_perfil: '/images/' + files[0].originalname }, {
            where: { id }
        });
        let userUpdated = await Usuario.findAll({ where: { id }});
        res.send(userUpdated);  
        
    },
    preferencias: async (req, res) =>{
        let { servico } = req.body;
        let servicosGerais = await ServicoGeral.findAll({ where: {servico: { [Op.like]: `%${servico}%` } }});
        //alert(servicosGerais);
        res.send(servicosGerais);
    },
    inserirPreferencias: async(req, res) => {
        let { fk_usuario, fk_servico } = req.body;
        await UsuarioServicoGeral.create({ fk_usuario, fk_servico})
        let servicosGerais = await UsuarioServicoGeral.findAll(
            {
                include:
                [
                    {
                        model:ServicoGeral,
                        as:'servico_geral',
                        include:'usuario'
                    },
                'usuario'
                ]
            }
            
        );       
        res.send(servicosGerais);
    }
}

module.exports = usuariosController;