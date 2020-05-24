const {sequelize, DadoProfissional, Usuario} = require("../models");
const ProfissionalController = {
    perfilPro: async(req, res) =>{ //por aqui ta dando DadoProfissional is undefined (¬_¬)
        let { id } = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id }});
        res.render('perfilProfissional', {title: 'Profissional', usuario});
    },

    mostrarProfissionais: async (req, res) =>{
        let { id } = req.session.usuario; // Ta dando usuario is not defined (¬_¬)
        console.log("UsuarioLog é" + id);
        let Profissional = await DadoProfissional.findAll({
            where: {
                fk_usuario: id
            }
        })
        res.send('perfilProfissional', {Profissional});
    },

    salvarProfissional: async(req, res) => {
        let { id } = req.session.usuario;
        let  { cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal} = req.body;
        let registro = await DadoProfissional.create({
            cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario: id
        });
        console.log(registro);
        res.send('salvarProfissional', {registro});
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
        res.send('editarProfissional', {registro});
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