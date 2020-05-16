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

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

/* GET users listing. */
router.get('/', VerificaUsuarioLogado, usuariosController.perfil);

module.exports = router;
