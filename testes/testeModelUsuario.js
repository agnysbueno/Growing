const { sequelize, Usuario } = require('../models');

let usuarios = Usuario.findAll();
console.log(usuarios);