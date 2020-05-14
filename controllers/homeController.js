const bcrypt = require('bcrypt');
let { sequelize, Usuario } = require('../models');

const homeController = {
    index:(req,res) =>{
        res.render('indexApp', {title: "Growing Express"});
    },

    cadastro:(req, res) =>{
        res.render('cadastro', {title: "Cadastro"});
    },

    cadUsuario: async(req, res) =>{
        let {nome_completo, email, senha} = req.body;
        let hashPassword = bcrypt.hashSync(senha, 10);

        await Usuario.create({nome_completo, email, senha:hashPassword});
        res.redirect('/');
    }
}

module.exports = homeController;