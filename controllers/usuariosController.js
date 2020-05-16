const usuariosController = {
    perfil:(req, res) =>{
        let usuario = req.session.usuario;
        res.render('perfil', {title: 'Usuário', usuario});
    }
}

module.exports = usuariosController;