var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('public', 'images'));
    },
    filename: (req, file, cb) =>{
        console.log(file)
        cb(null, file.originalname);

    }
});
let upload = multer({ storage: storage});

//Controller
const PortfoliosController = require("../controllers/PortfoliosController");

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Rotas
router.get('/', VerificaUsuarioLogado, PortfoliosController.index);
router.get('/meuportfolio', VerificaUsuarioLogado, PortfoliosController.showPortfoliosDoUsuario);
router.post('/meuportfolio', VerificaUsuarioLogado, upload.any(), PortfoliosController.criarPortfolio);

router.get('/meuportfolio/editar/:id', VerificaUsuarioLogado, PortfoliosController.showEditar);
router.put('/meuportfolio/editar/:id', VerificaUsuarioLogado, upload.any(), PortfoliosController.editarPortfolio);

router.delete('/meuportfolio/editar/deletarimagem/:id', VerificaUsuarioLogado, PortfoliosController.deletarImagemDoPortfolio);
router.delete('/deletar/:id', VerificaUsuarioLogado, PortfoliosController.deletarPortfolio);



module.exports = router;