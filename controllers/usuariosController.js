let {sequelize, Usuario} = require("../models");
const usuariosController = {
    perfil:(req, res) =>{
        let usuario = req.session.usuario;
        res.render('perfil', {title: 'Usuário', usuario});
    }, 
    atualizar:async (req,res) =>{

        let {id, nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio } = req.body;
        console.log(id, nome_completo);
        // let updateUser = await Usuario.findAll({ where: { id }});
        // await Post.update({  nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio }, {
        //     where: { id }
        // });
        res.send();
        
    }
}

module.exports = usuariosController;