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
const profissionalController = require('../controllers/profissionalController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Profissionals
router.get('/', VerificaUsuarioLogado, profissionalController.perfilPro); //Mostra todos
router.post('/salvarProfissional', profissionalController.salvarProfissional); //Salva o form de cadastro
router.get('/sucessoProfissional', profissionalController.sucessoProfissional); //Mensagem de Sucesso ou erro.
router.get('/verProfissional', profissionalController.verProfissional); //Ver um profissional específico
router.put('/editarProfissional', profissionalController.editarProfissional); //Ver form edição de profissional
router.delete('/deletarProfissional/:id', profissionalController.deletarProfissional); //Deleta um profissional

module.exports = router;
