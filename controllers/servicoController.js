const {UsuarioServicoEspecifico} = require("../models");
const servicoController = {
    mostrarServicos: async (req, res) =>{
        let {id} = req.params; //pega id do usuario profissional que está renderizado na pagina.
        let servicos = await UsuarioServicoEspecifico.findAll({
            where: {
                fk_usuario: id
            }
        })
        res.render('mostrarServicos', {servicos});
    },

    criarServico: (req, res) => { //Renderiza um form
        res.render('criarServico', {title: 'Criar'});
    },

    salvarServico: (req, res) => {
        let usuario = req.session.usuario;
        let {fk_servico, preco, imagem, descricao} = req.params;
        let registro = await UsuarioServicoEspecifico.create({
            fk_usuario: usuario.id, fk_servico, preco, imagem, descricao
        });
        res.render('salvarServico', {registro});
    },

    sucessoServico: (req, res) => {
        let {registro} = req.params;
        let sucesso = registro? res.send('Servico cadastrado com sucesso') : res.send('Erro ao cadastrar Servico');
        res.send('sucessoServico', {title: 'Sucesso', sucesso});
    },

    verServico: (req, res) => {
        let {id} = req.params;
        UsuarioServicoEspecifico.findOne({
            where: { id }
        }).then(result => { res.send(result)});
    },

    editarServico:(req, res) => {
        let {id} = req.params;
        let {fk_servico, preco, imagem, descricao} = req.params;
        let registro = await UsuarioServicoEspecifico.update({
            fk_servico, preco, imagem, descricao
        },{
            where: { id }
        });
        res.render('editarServico', {registro});
    },

    deletarServico: async (req, res) => {
        let {id} = req.params;
        await UsuarioServicoEspecifico.destroy({
            where: { id }
        })
        res.render('deletarServico', {title: 'Deletar'});
    }
}

module.exports = servicoController;