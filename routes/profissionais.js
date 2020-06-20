var express = require('express');
var router = express.Router();

const profissionalController = require('../controllers/profissionalController');

const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

router.get('/', VerificaUsuarioLogado, profissionalController.perfilPro); 
router.post('/', VerificaUsuarioLogado, profissionalController.salvarProfissional);
router.get('/verProfissional/:idProfissional', profissionalController.verProfissional);
router.post('/editarProfissional', profissionalController.editarProfissional);
router.delete('/deletarProfissional/:id', profissionalController.deletarProfissional);

module.exports = router;