const servicoController = {
    servico:(req, res) =>{
        let servico = req.session.usuario;
        res.render('usuarioServico', {title: 'Servico', servico});
    }
}

module.exports = servicoController;