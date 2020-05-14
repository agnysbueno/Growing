var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);
router.get('/cadastro', homeController.cadastro);
router.post('/cadastro', homeController.cadUsuario);

module.exports = router;