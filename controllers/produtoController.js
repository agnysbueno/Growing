const {sequelize, UsuarioProduto} = require("../models");
const produtoController = {
    mostrarProdutos: async (req, res) =>{
        let {id} = req.params; //pega id do usuario profissional que está renderizado na pagina.
        let produtos = await UsuarioProduto.findAll({
            where: {
                fk_usuario: id
            }
        })
        res.render('mostrarProdutos', {produtos});
    },

    criarProduto: (req, res) => { //Renderiza um form
        res.render('criarProduto', {title: 'Criar'});
    },

    salvarProduto: async(req, res) => {
        let usuario = req.session.usuario;
        let {fk_produto, preco, imagem, descricao} = req.params;
        let registro = await UsuarioProduto.create({
            fk_usuario: usuario.id, fk_produto, preco, imagem, descricao
        });
        res.render('salvarProduto', {registro});
    },

    sucessoProduto: (req, res) => {
        let {registro} = req.params;
        let sucesso = registro? res.send('Produto cadastrado com sucesso') : res.send('Erro ao cadastrar produto');
        res.send('sucessoProduto', {title: 'Sucesso', sucesso});
    },

    verProduto: (req, res) => {
        let {id} = req.params;
        UsuarioProduto.findOne({
            where: { id }
        }).then(result => { res.send(result)});
    },

    editarProduto:async(req, res) => {
        let {id} = req.params;
        let {fk_produto, preco, imagem, descricao} = req.params;
        let registro = await UsuarioProduto.update({
            fk_produto, preco, imagem, descricao
        },{
            where: { id }
        });
        res.render('editarProduto', {registro});
    },

    deletarProduto: async (req, res) => {
        let {id} = req.params;
        await UsuarioProduto.destroy({
            where: { id }
        })
        res.render('deletarProduto', {title: 'Deletar'});
    }
}

module.exports = produtoController;