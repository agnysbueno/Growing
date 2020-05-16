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
const usuariosController = require('../controllers/usuariosController');
const servicoController = require('../controllers/servicoController');
const produtoController = require('../controllers/produtoController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

/* GET users listing. */
router.get('/', VerificaUsuarioLogado, usuariosController.perfil);
router.post('/', VerificaUsuarioLogado, usuariosController.atualizar)

//Serviços
router.get('/usuarioServico', servicoController.servico);

//Produtos
router.get('/usuarioProduto', produtoController.produto);

module.exports = router;
