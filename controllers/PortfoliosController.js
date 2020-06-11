const {sequelize, ImagemPortfolio, ServicoGeral, RegistroPortfolio} = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');

const PortfoliosController = {
    index: async(req, res) => { 
        let usuarioLog = req.session.usuario;
        let {categoria = "Barba"} = req.query;
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1);
 
        let listaDePortfoliosDaCategoria = await RegistroPortfolio.findAll({
            include:[
            {
                model: ImagemPortfolio,
                as: 'imagens',
                require: true
            },
            {
                model: ServicoGeral,
                as: 'servicogeral',
                require: true,
                where:{
                    servico: {
                        [Op.like]: `%${categoria}%`
                    }
                }
            }]
        });
        res.render('portfolios', {usuarioLog, listaDePortfoliosDaCategoria, categoria});
    },
    showPortfoliosDoUsuario: async (req, res) => {
        let usuarioLog = req.session.usuario;
        let listaDePortfoliosDoUsuario = await RegistroPortfolio.findAll({
            include:[
                {
                    model: ImagemPortfolio,
                    as: 'imagens',
                    require: true
                },{
                    model: ServicoGeral,
                    as: 'servicogeral',
                    require: true
                }],
                where: {
                    fk_usuario: usuarioLog.id
                }
        })
        res.render('portfolioDoUsuario', {usuarioLog, listaDePortfoliosDoUsuario});
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
        let idDoUltimoPortfolio = await RegistroPortfolio.max('id');
        files.forEach(async file => {
            const resultado1 = await ImagemPortfolio.create({
                imagem: '/images/' + file.originalname,
                fk_registro_portfolio: idDoUltimoPortfolio
            })
        })
        return res.redirect ('/portfolios/meuportfolio');
    },
    showEditar: async(req, res) => {
        const {id} = req.params;
        const usuarioLog = req.session.usuario;
        const portfolio = await RegistroPortfolio.findOne({
            where:{
                id
            },
            include:[
                {
                    model: ImagemPortfolio,
                    as: 'imagens',
                    require:true
                },
                {
                    model: ServicoGeral,
                    as: 'servicogeral',
                    require:true
                }]
        });
        return res.render ('editarPortfolioDoUsuario', {portfolio, usuarioLog});
    },
    editarPortfolio: async(req, res) => {
        const {titulo, descricao, categoria} = req.body;
        const {files} = req;
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
        files.forEach(async file => {
            const resultado1 = await ImagemPortfolio.create({
                imagem: '/images/' + file.originalname,
                fk_registro_portfolio: id
            })
        })
        return res.redirect ('/portfolios/meuportfolio');
    },
    deletarPortfolio: async (req, res) => {
        let {id} = req.params;
        let resultado = await RegistroPortfolio.destroy({
            where: { id }
        })
        return res.redirect('/portfolios/meuportfolio');
    },
    deletarImagemDoPortfolio: async (req,res) => {
        let {id} = req.params;
        let {idport} = req.body;
        let resultado = await ImagemPortfolio.destroy({
            where: {
                id
            }
        })
        return res.redirect('/portfolios/meuportfolio/editar/' + idport);
    }
}
module.exports = PortfoliosController;