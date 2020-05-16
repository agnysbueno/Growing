const {Produto} = require("../models");
const produtoController = {
    mostrarProdutos:(req, res) =>{
        let produto = req.session.usuario;
        res.render('mostrarProdutos', {title: 'Produto', produto});
    },

    criarProduto: '',
    salvarProduto:'',
    sucessoProduto:'',
    verProduto:'',
    editarProduto:'',
    deletarProduto: (req, res) => {
        let {id} = req.params;
        res.render('deletarProduto', {title: 'Produto', id});
    }
}

module.exports = produtoController;