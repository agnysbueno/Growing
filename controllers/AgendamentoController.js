const {sequelize, Compromisso, Usuario, ServicoEspecifico, UsuarioServicoEspecifico} = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');

const AgendamentoController = {
    index: async(req, res) => { 
        let usuarioLog = req.session.usuario;
        
        res.render('agendamentos', {usuarioLog});
    },
    criarAgendamento: async(req, res) => {
        let usuarioLog = req.session.usuario;
        const {pkProfissional, message, data, horainicial, horafinal, servicoespecifico} = req.body;


        function stringToDate(_date,_format,_delimiter)
        {
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
        }
        function toDate(dStr,format) {
            var now = new Date();
            if (format == "h:m") {
                 now.setHours(dStr.substr(0,dStr.indexOf(":")));
                 now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
                 now.setSeconds(0);
                 return now;
            }else 
                return "Invalid Format";
        }
        let dateTrans = stringToDate(data, "dd/MM/yyyy", "/");
        let horinic = toDate(horainicial, "h:m");
        let horfin = toDate(horafinal, "h:m");
        
        console.log(dateTrans)
        console.log(horinic)
        console.log(horfin)



        const resultado = await Compromisso.create({
            fk_usuario_consumidor : usuarioLog.id,
            fk_usuario_prestador: pkProfissional,
            fk_servico: servicoespecifico,
            fk_avaliacao: null,
            horario_inicio: horinic,
            horario_fim: horfin,
            observacoes: message
        })
        
        res.redirect('/agendamentos/ver');
    },
    showPaginaCriarAgendamento: async(req,res) =>{
        let usuarioLog = req.session.usuario;
        const servicosEspec = await ServicoEspecifico.findAll();
        const profissionais = await Usuario.findAll({
            include: {
                model: ServicoEspecifico,
                as: "servicos_especificos",
                required:true
            }
        })
        res.render('agendamentocriar', {usuarioLog, servicosEspec, profissionais})
    },
    verAgendamentos: async(req,res) => {
        let usuarioLog = req.session.usuario;
        
        res.render('agendamentosdousuario', {usuarioLog});
    }
}
module.exports = AgendamentoController;