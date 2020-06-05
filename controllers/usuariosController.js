let {sequelize, Usuario, ServicoGeral, UsuarioServicoGeral, Post } = require("../models");
const multer = require('multer');
const { Op } = require("sequelize");
const usuariosController = {
    perfil: async(req, res) =>{
        let usuarioLog = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id: usuarioLog.id } });
        let posts = await Post.findAll({ where: { fk_usuario: usuarioLog.id }, order:[['id', 'DESC']] })
        let preferencias = await UsuarioServicoGeral.findAll({include:'ServicoGeral', where: {fk_usuario: usuarioLog.id}});
        res.render('perfil', {title: 'Usuário', usuario, preferencias, posts});
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
        let novaPref = await UsuarioServicoGeral.create({ fk_usuario, fk_servico}, {include:'ServicoGeral'});
        let preferencias = await UsuarioServicoGeral.findAll({include:'ServicoGeral', where: { id: novaPref.id } });
        res.send(preferencias);
    },
    apagarPreferencias: async(req, res) => {
        let { id } = req.body;
        await UsuarioServicoGeral.destroy({ where: { id } });
        let preferencias = await UsuarioServicoGeral.findAll({include:'ServicoGeral'}, { where: { id } });
        res.send(preferencias);
    }
}

module.exports = usuariosController;