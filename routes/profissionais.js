var express = require('express');
var router = express.Router();

//Controllers
const profissionalController = require('../controllers/profissionalController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

router.get('/', VerificaUsuarioLogado, profissionalController.perfilPro); 
router.post('/', VerificaUsuarioLogado, profissionalController.salvarProfissional); 
// router.get('/sucessoProfissional', profissionalController.sucessoProfissional); //Mensagem de Sucesso ou erro.
// router.get('/verProfissional', profissionalController.verProfissional); //Ver um profissional específico
router.put('/editarProfissional', profissionalController.editarProfissional); //Ver form edição de profissional
// router.delete('/deletarProfissional/:id', profissionalController.deletarProfissional); //Deleta um profissional

module.exports = router;
