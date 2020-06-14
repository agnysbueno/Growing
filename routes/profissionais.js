var express = require('express');
var router = express.Router();

//Controllers
const profissionalController = require('../controllers/profissionalController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

router.get('/', VerificaUsuarioLogado, profissionalController.perfilPro); 
router.post('/', VerificaUsuarioLogado, profissionalController.salvarProfissional); 
router.get('/verProfissional/:idProfissional', profissionalController.verProfissional);
router.post('/editarProfissional', profissionalController.editarProfissional);
router.delete('/deletarProfissional/:idProfissional', profissionalController.deletarProfissional);

module.exports = router;
