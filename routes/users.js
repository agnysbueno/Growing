var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('public', 'images'));
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);

    }
});
let upload = multer({ storage: storage})

//Controllers
const usuariosController = require('../controllers/usuariosController');

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

/* GET users listing. */
router.get('/:id', VerificaUsuarioLogado, usuariosController.perfil);
router.post('/', VerificaUsuarioLogado, usuariosController.atualizar)
router.post('/imgperfil', VerificaUsuarioLogado, upload.any(), usuariosController.atualPerfil)

//Serviços Gerais
router.post('/servicos', VerificaUsuarioLogado, usuariosController.preferencias);
router.post('/inserirServico', VerificaUsuarioLogado, usuariosController.inserirPreferencias);
router.post('/deletePreferencias', VerificaUsuarioLogado, usuariosController.apagarPreferencias);


module.exports = router;
