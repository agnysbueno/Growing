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

router.get('/editar/:id', VerificaUsuarioLogado, AgendamentoController.showEditarCompromisso);
router.put('/editar/:id', VerificaUsuarioLogado, AgendamentoController.editarCompromisso);

router.delete('/ver/deletar/:id', VerificaUsuarioLogado, AgendamentoController.excluirAgendamento);



module.exports = router;