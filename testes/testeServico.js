const { sequelize, ServicoGeral } = require('../models');
const { Op } = require("sequelize");
//const Op = sequelize.Op;

ServicoGeral.findAll({where: { servico: {[Op.like]: '%Manicure%'} }}).then(
    data => {
        console.log(data.map( s => s.toJSON()));
        sequelize.close();
    }
)
