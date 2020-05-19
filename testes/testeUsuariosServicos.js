let {sequelize, Usuario, UsuarioServicoGeral, ServicoGeral } = require("../models");

Usuario.findAll({include:[
    {
        model:ServicoGeral,
        as: 'servico',
        include: 'ServicoGeral'
    }, 
    'ServicoGeral'
]}
).then(
    data => {
        console.log(data.map(s => s.toJSON()));
    }
); 
