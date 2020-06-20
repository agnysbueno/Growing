const {sequelize, Usuario, Post, Comentario} = require("../models");
const fs = require('fs');
const path = require('path');

const comentarioController = {
    salvarComentario: async (req, res) => {
        const { id, nome_completo, foto_perfil } = req.session.usuario;
        let data = new Date();
        let {texto, imagem, fk_post} = req.body;
        let commentario = await Comentario.create({
            texto,
            data_comentario: data,
            imagem,
            fk_post,
            fk_usuario: id
        });
        console.log(commentario);
        let novoComentario = {
            id: commentario.id,
            texto: commentario.texto,
            imagem: commentario.imagem,
            data: commentario.data_comentario,
            nome: nome_completo,
            perfil: foto_perfil,
            Userid: id,
            idPost: fk_post
        }
        res.send(novoComentario);
        //console.log("salvando no banco de dados");
    },
    delete: async(req, res) => {
        let { id } = req.body;
        console.log(req.body);
        await Comentario.destroy({where: { id }});
        res.send(id);
    }
}

module.exports = comentarioController;