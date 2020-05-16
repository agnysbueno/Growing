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

/* GET home page. */
router.get('/', homeController.index);
router.get('/cadastro', homeController.cadastro);
router.post('/cadastro', homeController.cadUsuario);

module.exports = router;