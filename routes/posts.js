var express = require('express');
var router = express.Router();

//Controller
const postController = require("../controllers/postController");

//Rotas
router.post('/', postController.salvarPost);
router.get('/', postController.listarPost);

module.exports = router;