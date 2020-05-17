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
const servicoController = require('../controllers/servicoController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Servicos
router.get('/mostrarServicos', servicoController.mostrarServicos); //Mostra todos
router.get('/criarServico', servicoController.criarServico); //Cadastrar Servico por form
router.post('/salvarServico', servicoController.salvarServico); //Salva o form de cadastro
router.get('/sucessoServico', servicoController.sucessoServico); //Mensagem de Sucesso ou erro.
router.get('/verServico', servicoController.verServico); //Ver um Servico específico
router.put('/editarServico', servicoController.editarServico); //Ver form edição de Servico
router.delete('/deletarServico/:id', servicoController.deletarServico); //Deleta um Servico

module.exports = router;
