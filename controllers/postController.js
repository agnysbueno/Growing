const {sequelize, Post} = require("../models");

const postController = {
    salvarPost: async(req, res) => {
        const { id } = req.session.usuario;
        let data = new Date();
        let {texto, imagem} = req.body;
        let publicacao = await Post.create({texto: texto, data_postagem: data, fk_usuario: id });
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
    }
}

module.exports = postController;