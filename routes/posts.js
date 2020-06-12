var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('public', 'images', 'postagens'));
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);

    }
});
let upload = multer({ storage: storage})

//Controller
const postController = require("../controllers/postController");

//Middlewares 
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

//Rotas
router.post('/salvarPost', VerificaUsuarioLogado, postController.salvarPost);
router.post('/imgposts', VerificaUsuarioLogado, upload.any(), postController.imgposts);
router.post('/deleteimg', VerificaUsuarioLogado, postController.delimg);
router.get('/', VerificaUsuarioLogado, postController.feedgeral);
router.post('/carregar', VerificaUsuarioLogado, postController.carregaPost);
router.post('/update', VerificaUsuarioLogado, postController.update);
router.delete('/delete', VerificaUsuarioLogado, postController.delete);

module.exports = router;