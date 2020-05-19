let {sequelize, Usuario, UsuarioServicoGeral, ServicoGeral } = require("../models");

UsuarioServicoGeral.findAll({include:'ServicoGeral', where:{ fk_usuario: 2 }}).then(
    data => {
        console.log(data.map(s => s.toJSON()));
    }
); 
