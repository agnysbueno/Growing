const {sequelize, UsuarioServicoEspecifico, Usuario, DadoProfissional, Produto, ServicoEspecifico, ServicoGeral} = require("../models");
const servicoController = {
    // perfilCon: async(req, res) =>{
    //     let usuarioLog = req.session.usuario;
    //     let usuario = await Usuario.findAll({ where: { id: usuarioLog.id }});
    //     res.render('perfil', {title: 'Consumidor', usuario});
    // },

    // mostrarServicos: async (req, res) =>{
    //     let {id} = req.params; //pega id do usuario profissional que está renderizado na pagina.
    //     let servicos = await UsuarioServicoEspecifico.findAll({
    //         where: {
    //             fk_usuario: id
    //         }
    //     })
    //     res.render('mostrarServicos', {servicos});
    // },

    criarServico: async(req, res) => {
        let {id} = req.session.usuario;
        let {fk_servico, preco, imagem, descricao} = req.params;

        let usuario = await Usuario.findAll({ where: { id }});
        let dProf = await DadoProfissional.findOne({ where: {fk_usuario: id}});
        let dadoProfissional = dProf;

        // let servico = await UsuarioServicoEspecifico.create({ fk_usuario: id, fk_servico, preco, imagem, descricao });
        console.log(`Rota criar serviço: ==>  ${id}, ${fk_servico}, ${preco}, ${imagem}, ${descricao} <==: , , , , `);

        let listaProduto = await Produto.findAll();
        let listaServicoGeral = await ServicoGeral.findAll();
        let listaServicoEspecifico = await ServicoEspecifico.findAll();
        res.render("verProfissional", {dProf, dadoProfissional, usuario, servico, listaProduto, listaServicoGeral, listaServicoEspecifico});
    },

    // sucessoServico: (req, res) => {
    //     let {registro} = req.params;
    //     let sucesso = registro? res.send('Servico cadastrado com sucesso') : res.send('Erro ao cadastrar Servico');
    //     res.send('sucessoServico', {title: 'Sucesso', sucesso});
    // },

    // verServico: (req, res) => {
    //     let {id} = req.params;
    //     UsuarioServicoEspecifico.findOne({
    //         where: { id }
    //     }).then(result => { res.send(result)});
    // },

    // editarServico: async(req, res) => {
    //     let {id} = req.params;
    //     let {fk_servico, preco, imagem, descricao} = req.params;
    //     let registro = await UsuarioServicoEspecifico.update({
    //         fk_servico, preco, imagem, descricao
    //     },{
    //         where: { id }
    //     });
    //     res.render('editarServico', {registro});
    // },

    // deletarServico: async (req, res) => {
    //     let {id} = req.params;
    //     await UsuarioServicoEspecifico.destroy({
    //         where: { id }
    //     })
    //     res.render('deletarServico', {title: 'Deletar'});
    // }
}

module.exports = servicoController;