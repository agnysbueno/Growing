const {sequelize, Usuario, Post, Comentario} = require("../models");
const fs = require('fs');
const path = require('path');

const postController = {
    salvarPost: async(req, res) => {
        const { id, nome_completo, foto_perfil } = req.session.usuario;
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
        //console.log(novaPostagem);
        res.send(novaPostagem);
    },
    update:async(req, res) =>{
        const { id, nome_completo, foto_perfil } = req.session.usuario;
        let data = new Date();
        let { idPost, texto, imagem} = req.body;
        await Post.update({texto, data_postagem: data, imagem }, { where: { id: idPost } });
        let publicacao = await Post.findAll({ where: { id: idPost }}); 
        console.log(publicacao);
        // let postUpdate = {
        //     id: publicacao.id,
        //     texto: publicacao.texto,
        //     imagem: publicacao.imagem,
        //     data: publicacao.data_postagem,
        //     nome: nome_completo,
        //     perfil: foto_perfil
        // }
        //console.log(postUpdate);
        res.send(publicacao);
    },
    feedgeral:async(req, res) => {
        //essa parte n funciona
        let { id, nome_completo, foto_perfil } = req.session.usuario;
        let usuario = await Usuario.findAll({ id });
        let posts = await Post.findAll({limit:50, include:[{model:Comentario, as:'Comentario'}, {model:Usuario, as:'Usuario'}], order:[['data_postagem', 'DESC']]});
        //console.log(posts);
        //res.send(posts);
        res.render('feedGeral', { usuario, posts });
        // console.log("listando todos os posts");
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
        filename = filename.replace('/images/postagens/','');
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
    },
    //Apaga post
    delete:async(req, res) => {
        let { idPost, imagem } = req.body;
        let { id } = req.session.usuario;
        console.log(imagem);
        if(imagem != ""){
            fs.unlink("./public" + imagem, (err) => {
                if(err){
                    console.log('Erro ao excluir imagem! ' + err);
                } else {
                    console.log('Imagem apagada com sucesso!');
                }
            });
        }
        await Post.destroy({where: { id: idPost }});
        res.send(idPost);

    },
    //Carregar post para edição
    carregaPost:async(req,res) => {
        let { id } = req.body;
        let postagem = await Post.findAll({where: { id }});
        res.send(postagem);
    }
}

module.exports = postController;