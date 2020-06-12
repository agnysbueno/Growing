const {sequelize, DadoProfissional, Usuario} = require("../models");
const ProfissionalController = {
    perfilPro: async(req, res) =>{ //por aqui ta dando DadoProfissional is undefined (¬_¬)
        let { id } = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id }});
        res.render('perfilProfissional', {title: 'Profissional', usuario});
    },

    // mostrarProfissionais: async (req, res) =>{
    //     let { id } = req.session.usuario; // Ta dando usuario is not defined (¬_¬)
    //     console.log("UsuarioLog é" + id);
    //     let Profissional = await DadoProfissional.findAll({
    //         where: {
    //             fk_usuario: id
    //         }
    //     })
    //     res.send('perfilProfissional', {Profissional});
    // },

    salvarProfissional: async (req, res) => {
        let usuario = req.session.usuario;
        let fk_usuario = usuario.id;
        let  { cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal} = req.body;
        console.log(cnpj, usuario.id);

        let registro = await DadoProfissional.create({
           cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario
        });
        // console.log(registro);
        res.redirect('profissionais');
    },

    // sucessoProfissional: (req, res) => {
    //     let {registro} = req.params;
    //     let sucesso = registro? res.send('Profissional cadastrado com sucesso') : res.send('Erro ao cadastrar Profissional');
    //     res.send('sucessoProfissional', {title: 'Sucesso', sucesso});
    // },

    verProfissional: async(req, res) => {
        let {id} = req.session.usuario;
        let {idProfissional} = req.params;
        let usuario = await Usuario.findAll({ where: { id }});
        let dadoProfissional= await DadoProfissional.findOne({
            where: { id: idProfissional }
        }) 
        console.log(dadoProfissional);
        res.render("verProfissional" , {dadoProfissional, usuario});
    },

    editarProfissional: async(req, res) => {
        let usuario = req.session.usuario;
        let  { idProfissional, cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal} = req.body;
        console.log(cnpj, usuario.id, idProfissional);
        let atualiza = await DadoProfissional.update({
            cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal
        },{
            where: { id: idProfissional}
        });
        res.redirect('/profissionais');
    },

    // deletarProfissional: async (req, res) => {
    //     let {id} = req.params;
    //     await DadoProfissional.destroy({
    //         where: { id }
    //     })
    //     res.render('deletarProfissional', {title: 'Deletar'});
    // }
}

module.exports = ProfissionalController;