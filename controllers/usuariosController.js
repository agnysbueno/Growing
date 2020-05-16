const usuariosController = {
    perfil:(req, res) =>{
        res.render('perfil', {title: 'Usuário'});
    }
}

module.exports = usuariosController;