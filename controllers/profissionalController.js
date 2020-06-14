const {sequelize, DadoProfissional, Usuario} = require("../models");
const ProfissionalController = {
    perfilPro: async(req, res) =>{
        let { id } = req.session.usuario;
        let usuario = await Usuario.findAll({ where: { id }});
        let dProf = await DadoProfissional.findOne({ where: {fk_usuario: id}});
        if(dProf){dProf=dProf}else{dProf = {
            id: 0,
            cnpj: "00.000.000/0000-00",
            razao_social: "Sua razão social",
            nome_fantasia: "Seu nome fantasia",
            inscricao_estadual: 000000000,
            inscricao_municipal: 00000000,
            fk_usuario: 0
        }};
        console.log("DProf =====> " + dProf.id+ "|"+ id + "<===");
        res.render('perfilProfissional', {title: 'Profissional', usuario, dProf});
    },

    salvarProfissional: async (req, res) => {
        let usuario = req.session.usuario;
        let fk_usuario = usuario.id;
        let  { cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal} = req.body;
        console.log(cnpj, usuario.id);

        let registro = await DadoProfissional.create({
           cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario
        });
        // console.log(registro);
        res.redirect('profissionais');
    },

    verProfissional: async(req, res) => {
        let {id} = req.session.usuario;
        let {idProfissional} = req.params;
        let usuario = await Usuario.findAll({ where: { id }});
        let dadoProfissional= await DadoProfissional.findOne({
            where: { id: idProfissional }
        }) 
        console.log(dadoProfissional);
        res.render("verProfissional" , {dadoProfissional, usuario});
    },

    editarProfissional: async(req, res) => {
        let usuario = req.session.usuario;
        let  { idProfissional, cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal} = req.body;
        console.log(cnpj, usuario.id, idProfissional);
        let atualiza = await DadoProfissional.update({
            cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal
        },{
            where: { id: idProfissional}
        });
        res.redirect('/profissionais');
    },

    deletarProfissional: async (req, res) => {
        let {usuario} = req.session.usuario;
        let {idProfissional} = req.body;
        let deletado = await DadoProfissional.destroy({
            where: { id: idProfissional }
        })
        res.redirect('/profissionais');
    }
}

module.exports = ProfissionalController;