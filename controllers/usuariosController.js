let {sequelize, Usuario} = require("../models");
const multer = require('multer');
const usuariosController = {
    perfil: async(req, res) =>{
        let usuarioLog = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id: usuarioLog.id }});
        res.render('perfil', {title: 'Usuário', usuario});
    }, 
    atualizar:async (req,res) =>{
        let {id, nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio } = req.body;
        await Usuario.update({  nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio }, {
            where: { id }
        });
        let userUpdated = await Usuario.findAll({ where: { id }});
        res.send(userUpdated);  
    },

    atualPerfil:async(req, res) => {
        let { id } = req.body;
        console.log(id);
        let { files } = req;
        console.log(files);
        await Usuario.update({  foto_perfil: '/images/' + files[0].originalname }, {
            where: { id }
        });
        let userUpdated = await Usuario.findAll({ where: { id }});
        res.send(userUpdated);  
    }
}

module.exports = usuariosController;