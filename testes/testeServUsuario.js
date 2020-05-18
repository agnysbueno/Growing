let {sequelize, Usuario, ServicoGeral, UsuarioServicoGeral } = require("../models");

let servicosGerais = UsuarioServicoGeral.findAll(
    {
        include:
        [
            {
                model:UsuarioServicoGeral,
                as:'usuario_servico_geral',
                include:'servico_geral'
            },
        'servico_geral'
        ]
    }
    
); 

console.log(servicosGerais);