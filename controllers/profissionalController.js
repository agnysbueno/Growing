const {sequelize, DadoProfissional, Usuario} = require("../models");
const ProfissionalController = {
    perfilPro: async(req, res) =>{ //por aqui ta dando DadoProfissional is undefined (¬_¬)
        let usuarioLog = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id: usuarioLog.id }});
        res.render('perfilProfissional', {title: 'Profissional', usuario});
    },

    mostrarProfissionais: async (req, res) =>{
        let usuarioLog = req.session.usuario; // Ta dando usuario is not defined (¬_¬)
        console.log("UsuarioLog é" + usuarioLog);
        let Profissional = await DadoProfissional.findAll({
            where: {
                fk_usuario:usuarioLog.id
            }
        })
        res.render('perfilProfissional', {Profissional});
    },

    criarProfissional: (req, res) => { //Renderiza um form
        res.render('criarProfissional', {title: 'Criar'});
    },

    salvarProfissional: async(req, res) => {
        let usuario = req.session.usuario;
        let {fk_Profissional, preco, imagem, descricao} = req.params;
        let registro = await DadoProfissional.create({
            fk_usuario: usuario.id, fk_Profissional, preco, imagem, descricao
        });
        res.render('salvarProfissional', {registro});
    },

    sucessoProfissional: (req, res) => {
        let {registro} = req.params;
        let sucesso = registro? res.send('Profissional cadastrado com sucesso') : res.send('Erro ao cadastrar Profissional');
        res.send('sucessoProfissional', {title: 'Sucesso', sucesso});
    },

    verProfissional: (req, res) => {
        let {id} = req.params;
        DadoProfissional.findOne({
            where: { id }
        }).then(result => { res.send(result)});
    },

    editarProfissional: async(req, res) => {
        let {id} = req.params;
        let {fk_Profissional, preco, imagem, descricao} = req.params;
        let registro = await DadoProfissional.update({
            fk_Profissional, preco, imagem, descricao
        },{
            where: { id }
        });
        res.render('editarProfissional', {registro});
    },

    deletarProfissional: async (req, res) => {
        let {id} = req.params;
        await DadoProfissional.destroy({
            where: { id }
        })
        res.render('deletarProfissional', {title: 'Deletar'});
    }
}

module.exports = ProfissionalController;