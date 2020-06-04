const {sequelize, Post} = require("../models");
const fs = require('fs');
const path = require('path');

const postController = {
    salvarPost: async(req, res) => {
        const { id } = req.session.usuario;
        let data = new Date();
        let {texto, imagem} = req.body;
        let publicacao = await Post.create({texto: texto, data_postagem: data, imagem, fk_usuario: id });
        res.send(publicacao);
        console.log("salvando post no banco de dados");
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