const {sequelize, Usuario, Post, Comentario} = require("../models");
const fs = require('fs');
const path = require('path');

const comentarioController = {
    salvarComentario: async (req, res) => {
        const { id, nome_completo, foto_perfil } = req.session.usuario;
        let data = new Date();
        let {texto, imagem, idPost} = req.body;
        let commentario = await Comentario.create({
            texto: texto,
            data_comentario: data,
            imagem,
            fk_post: idPost,
            fk_usuario: id
        });

        let novoComentario = {
            id: commentario.id,
            texto: commentario.texto,
            imagem: commentario.imagem,
            data: commentario.data_comentario,
            nome: nome_completo,
            perfil: foto_perfil
        }
        res.send(novoComentario);
        console.log("salvando no banco de dados");
    }
}

module.exports = comentarioController;