const {sequelize, ImagemPortfolio, ServicoGeral, RegistroPortfolio} = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');

const PortfoliosController = {
    index: async (req, res) => { 
        let usuarioLog = req.session.usuario;
        let {categoria = "Geral"} = req.query;
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1);
 
        let listaDePortfoliosDaCategoria = await RegistroPortfolio.findAll({
            include:{
                model: ImagemPortfolio,
                as: 'imagens',
                require: true
            },
            include:{
                model: ServicoGeral,
                as: 'servicogeral',
                require: true,
                where:{
                    servico: {
                        [Op.like]: `%${categoria}`
                    }
                }
            }
        });
            
        // console.log(listaDePortfoliosDaCategoria[0].imagens[0].imagem)
            
        return res.render('portfolios', {usuarioLog, listaDePortfoliosDaCategoria, categoria});
    },
    showImagensDoPortfolio: async (req, res) =>{
        let usuarioLog = req.session.usuario;
        let {categoria = "Geral", id} = req.query;
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1);

        let listaDePortfoliosDaCategoria = null;

        return res.render('portfoliofotos', {listaDePortfoliosDaCategoria, imagensDoPortfolio, categoria, usuarioLog});
    },
    showPortfoliosDoUsuario: async (req, res) => {
        let usuarioLog = req.session.usuario;

        let listaDePortfoliosDoUsuario = await RegistroPortfolio.findAll({
            where: {
                fk_usuario: usuarioLog.id
            }
        })

        return res.render('portfolioDoUsuario', {usuarioLog, listaDePortfoliosDoUsuario});
    },
    criarPortfolio: async (req, res) => { //Renderiza um form
        const {titulo, descricao, categoria} = req.body;
        let {files} = req;
        let usuarioLog = req.session.usuario;

        const servico = await ServicoGeral.findOne({
            where:{
                servico: {
                    [Op.like]: `%${categoria}%`
                }
            }
        });
        if(!servico){
            servico.id = 9;
        }
        const resultado = await RegistroPortfolio.create({
            titulo,
            descricao,
            fk_usuario : usuarioLog.id,
            fk_servico_geral: servico.id
        })

        files.forEach(file => {
            let caminho = file.path;
            console.log(caminho)
            let imageData = fs.readFileSync(caminho);     
            let resultado1 =  ImagemPortfolio.create({
                imagem: imageData,
                fk_registro_portfolio: resultado.dataValues.id
            }).then(image => {
                try{
                    console.log(image)
                    fs.writeFileSync(caminho, image.imagem); 
                }catch(e){
                    console.log(e);
                }
            })
        });
        


        return res.redirect ('/portfolios/meuportfolio');
    },
    showEditar: async(req, res) => {
        const {id} = req.params;
        const usuarioLog = req.session.usuario;
        const portfolio = await RegistroPortfolio.findByPk(id);
        return res.render ('editarPortfolioDoUsuario', {portfolio, usuarioLog});
    },
    editarPortfolio: async(req, res) => {
        const {titulo, descricao, categoria} = req.body;
        const {id} = req.params;

        const servico = await ServicoGeral.findOne({
            where:{
                servico: {
                    [Op.like]: `%${categoria}%`
                }
            }
        });
        const resultado = await RegistroPortfolio.update({
            titulo,
            descricao,
            fk_servico_geral: servico.id
        },
        {
            where: { 
                id 
            }
        });
        return res.redirect ('/portfolios/meuportfolio');
    },
    deletarPortfolio: async (req, res) => {
        let {id} = req.params;
        let resultado = await RegistroPortfolio.destroy({
            where: { id }
        })
        return res.redirect('/portfolios/meuportfolio');
    }
}

module.exports = PortfoliosController;