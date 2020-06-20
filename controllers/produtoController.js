const {sequelize, Usuario, UsuarioProduto, DadoProfissional, Produto, ServicoEspecifico, ServicoGeral} = require("../models");
const produtoController = {
    mostrarProdutos: async (req, res) =>{
        let {id} = req.params;
        let produtos = await UsuarioProduto.findAll({
            where: {
                fk_usuario: id
            }
        })
        res.render('mostrarProdutos', {produtos});
    },

    criarProduto: async(req, res) => {
        let {id} = req.session.usuario;
        let {fk_produto, preco, imagem, descricao} = req.body;

        let usuario = await Usuario.findAll({ where: { id }});
        let dProf = await DadoProfissional.findOne({ where: {fk_usuario: id}});
        let dadoProfissional = dProf;

        let produto = await UsuarioProduto.create({ fk_usuario: id, fk_produto, preco, imagem, descricao });

        let listaProduto = await Produto.findAll();
        let listaServicoGeral = await ServicoGeral.findAll();
        let listaServicoEspecifico = await ServicoEspecifico.findAll();
        res.render("verProfissional", {dProf, dadoProfissional, usuario, produto, listaProduto, listaServicoGeral, listaServicoEspecifico});
    },

    // sucessoProduto: (req, res) => {
    //     let {registro} = req.params;
    //     let sucesso = registro? res.send('Produto cadastrado com sucesso') : res.send('Erro ao cadastrar produto');
    //     res.send('sucessoProduto', {title: 'Sucesso', sucesso});
    // },

    // verProduto: (req, res) => {
    //     let {id} = req.params;
    //     UsuarioProduto.findOne({
    //         where: { id }
    //     }).then(result => { res.send(result)});
    // },

    // editarProduto:async(req, res) => {
    //     let {id} = req.params;
    //     let {fk_produto, preco, imagem, descricao} = req.params;
    //     let registro = await UsuarioProduto.update({
    //         fk_produto, preco, imagem, descricao
    //     },{
    //         where: { id }
    //     });
    //     res.render('editarProduto', {registro});
    // },

    // deletarProduto: async (req, res) => {
    //     let {id} = req.params;
    //     await UsuarioProduto.destroy({
    //         where: { id }
    //     })
    //     res.render('deletarProduto', {title: 'Deletar'});
    // }
}

module.exports = produtoController;