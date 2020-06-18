var express = require('express');
var router = express.Router();
const path = require('path');


//Controller
const AgendamentoController = require("../controllers/AgendamentoController");

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Rotas
router.get('/', VerificaUsuarioLogado, AgendamentoController.index);
router.get('/criar', VerificaUsuarioLogado, AgendamentoController.showPaginaCriarAgendamento);
router.post('/criar', VerificaUsuarioLogado, AgendamentoController.criarAgendamento);
router.get('/ver', VerificaUsuarioLogado, AgendamentoController.verAgendamentos);




module.exports = router;