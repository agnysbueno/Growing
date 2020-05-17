var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

//Configurado para subir imagens
//Acrecentar 'uploadImagens.any', antes das controlers
let imagens = multer.diskStorage({
  destination:(req, file, cb) =>{
      cb(null, path.join('public', 'images'));
  },
  filename:(req, file, cb) =>{
      cb(null, file.originalname);
  }
});
let uploadImagens = multer({iamgens:imagens});

//Controllers
const produtoController = require('../controllers/produtoController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Produtos
router.get('/mostrarProdutos', produtoController.mostrarProdutos); //Mostra todos
router.get('/criarProduto', produtoController.criarProduto); //Cadastrar produto por form
router.post('/salvarProduto', produtoController.salvarProduto); //Salva o form de cadastro
router.get('/sucessoProduto', produtoController.sucessoProduto); //Mensagem de Sucesso ou erro.
router.get('/verProduto', produtoController.verProduto); //Ver um produto específico
router.put('/editarProduto', produtoController.editarProduto); //Ver form edição de produto
router.delete('/deletarProduto/:id', produtoController.deletarProduto); //Deleta um produto

module.exports = router;
