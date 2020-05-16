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
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

/* Cadastro de . */
router.get('/', homeController.index);

//Cadastro de usuários
router.get('/cadastro', homeController.cadastro);
router.post('/cadastro', homeController.cadUsuario);

//Login
router.get('/login', authController.showLogin);
router.post('/login', authController.login);

module.exports = router;