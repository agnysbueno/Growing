const {sequelize, Usuario, Post} = require("../models");
const fs = require('fs');
const path = require('path');

const postController = {
    salvarPost: async(req, res) => {
        const { id, nome_completo, foto_perfil } = req.session.usuario;
        console.log(req.session.usuario);
        let data = new Date();
        let {texto, imagem} = req.body;
        let publicacao = await Post.create({texto: texto, data_postagem: data, imagem, fk_usuario: id });

        let novaPostagem = {
            id: publicacao.id,
            texto: publicacao.texto,
            imagem: publicacao.imagem,
            data: publicacao.data_postagem,
            nome: nome_completo,
            perfil: foto_perfil
        }
        console.log(novaPostagem);
        res.send(novaPostagem);
    },
    listarPost: async(req, res) => {
        //essa parte n funciona
        let { id } = req.params;
        let posts = await Post.findAll({
            where: {
                fk_usuario: id
            }
        });
        res.render('listarPost', {posts});
        console.log("listando todos os posts");
    },

    //David Fico -- 05/05/2020
    //inclui imagems na pasta
    imgposts: (req, res) =>{
        let{ files } = req;
        //console.log(files[0].originalname)
        res.send(files[0].originalname);
    },
    //remove imagem
    delimg: (req, res) => {
        let { filename } = req.body;
        let deletado;
        fs.unlink("./public/images/postagens/" + filename, (err) => {
            if (err) {
                deletado = false
                console.log("failed to delete local image:"+err);
            } else {
                deletado = true;
                console.log('successfully deleted local image');                                
            }
        });
       
        res.send(deletado);
    }
}

module.exports = postController;