const {sequelize, ImagemPortfolio, ServicoGeral, RegistroPortfolio} = require("../models");

RegistroPortfolio.findAll().then(
    data => {
        console.log(data.map(r => r.toJSON()))
    }
)