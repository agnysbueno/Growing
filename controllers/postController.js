const {sequelize, Post} = require("../models");

const postController = {
    salvarPost: async(req, res) => {
        const { id } = req.session.usuario;
        let data = new Date();
        let {textoPost, imagemPost} = req.body;
        let publicacao = await Post.create({texto: textoPost, data_postagem: data, fk_usuario: id });
        res.send(publicacao);
        console.log("salvando post no banco de dados");
    }
}

module.exports = postController;