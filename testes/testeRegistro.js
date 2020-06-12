const {sequelize, ImagemPortfolio, ServicoGeral, RegistroPortfolio, Usuario} = require("../models");

// RegistroPortfolio.findAll({
//     include:[
//         {
//             model: ImagemPortfolio,
//             as: 'imagens',
//             require: true
//         },
//         {
//             model: ServicoGeral,
//             as: 'servicogeral',
//             require: true,
           
//         }]
// }).then(
//     data => {
//         console.log(data.map(r => r.toJSON()))
//     }
// )

// RegistroPortfolio.findAll({indlude:'ImagemPortfolio', include:'ServicoGeral'}).then(
//     data => {
//         console.log(data.map(r => r.toJSON()))
//     }
// )

RegistroPortfolio.findAll({include:'ImagemPortfolio'}).then(
    data => {
        console.log(data.map(r => r.toJSON()));
    }
)
// ImagemPortfolio.findAll({include:'RegistroPortfolio'}).then(
//     data => {
//         console.log(data.map(i => i.toJSON()));
//     }
// )