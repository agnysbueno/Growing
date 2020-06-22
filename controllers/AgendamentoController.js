const {sequelize, Compromisso, Usuario, ServicoEspecifico, UsuarioServicoEspecifico} = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const moment = require('moment');
const momentTz = require('moment-timezone')

const AgendamentoController = {
    index: async(req, res) => { 
        let usuarioLog = req.session.usuario;
        
        res.render('agendamentos', {usuarioLog});
    },
    criarAgendamento: async(req, res) => {
        let usuarioLog = req.session.usuario;
        const {idusuarioservicoespecifico, message, data, horainicial, horafinal} = req.body;

        let dateTrans = moment(data, "DD/MM/YYYY").utcOffset(-60*3);
        let horinic = moment(horainicial, "hh:mm").utcOffset(-60*3);
        let horfin = moment(horafinal, "hh:mm").utcOffset(-60*3);

        // let dateTrans1= momentTz.tz(dateTrans,'America/Sao_Paulo').format();
        // let horinic1= momentTz.tz(horinic,'America/Sao_Paulo').format();
        // let horfin1= momentTz.tz(horfin,'America/Sao_Paulo').format();



        const resultado = await Compromisso.create({
            fk_usuario_consumidor : usuarioLog.id,
            fk_usuario_servico_especifico: idusuarioservicoespecifico,
            date: dateTrans,
            horario_inicio: horinic,
            horario_fim: horfin,
            observacoes: message
        })
        
        res.redirect('/agendamentos/ver');
    },
    showPaginaCriarAgendamento: async(req,res) =>{
        let usuarioLog = req.session.usuario;
        const servicosEspec = await ServicoEspecifico.findAll({
            order:[
                ['servico', 'ASC']
            ],
            include:[{
                model:Usuario,
                as: 'usuario',
                required:true
            }]
        });
        console.log(servicosEspec[0].dataValues.usuario[0].dataValues)
        // const profissionais = await Usuario.findAll({
        //     include: {
        //         model: ServicoEspecifico,
        //         as: "servicos_especificos",
        //         required:true
        //     }
        // })
        res.render('agendamentocriar', {usuarioLog, servicosEspec})
    },
    verAgendamentos: async(req,res) => {
        let usuarioLog = req.session.usuario;

        const listaDeCompromissos = await Compromisso.findAll({
            where:{
                fk_usuario_consumidor: usuarioLog.id
            },
            include:[{
                model: UsuarioServicoEspecifico,
                as: 'usuarioservicoespecifico',
                required:true
            }]
        })
        res.render('agendamentosdousuario', {usuarioLog, listaDeCompromissos});
    },
    showEditarCompromisso: async (req, res) => {
        let usuarioLog = req.session.usuario;
        let {id} = req.params;
        let compromisso = await Compromisso.findByPk(id);
        let usuarioservicoespecifico = await UsuarioServicoEspecifico.findByPk(compromisso.fk_usuario_servico_especifico)
        let servicoespecifico = await ServicoEspecifico.findByPk(usuarioservicoespecifico.fk_servico)
        let profissional = await Usuario.findByPk(usuarioservicoespecifico.fk_usuario)
        res.render('agendamentoeditar', {usuarioLog, compromisso, usuarioservicoespecifico, servicoespecifico, profissional});
    },
    editarCompromisso: async(req, res) =>{
        const { message, data, horainicial, horafinal} = req.body;
        const {id} = req.params;
        let dateTrans = moment(data, "DD/MM/YYYY").utcOffset(-60*3);
        let horinic = moment(horainicial, "hh:mm").utcOffset(-60*3);
        let horfin = moment(horafinal, "hh:mm").utcOffset(-60*3);
        const resultado = await Compromisso.update({
            date: dateTrans,
            horario_inicio: horinic,
            horario_fim: horfin,
            observacoes: message,
        },{
            where:{
                id
            }
        })
        res.redirect('/agendamentos/ver');
    },
    excluirAgendamento: async(req, res) => {
        let {id} = req.params;
        let resultado = await Compromisso.destroy({
            where: { id }
        })
        res.redirect('/agendamentos/ver');
    }
}
module.exports = AgendamentoController;