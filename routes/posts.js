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

//Rotas
router.post('/salvarPost', postController.salvarPost);
router.post('/imgposts', upload.any(), postController.imgposts);
router.post('/deleteimg', postController.delimg);
router.get('/', postController.listarPost);

module.exports = router;