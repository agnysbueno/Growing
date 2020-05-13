const VerificaUsuarioLogado = (req, res, next) => {
    
    //se a session do usuário não estiver setada, redireciona para login
    if(!req.session.usuario){
        res.redirect('/login?error=2');
    }

    //se a session estiver setada, vai para o próximo middleware
    next();

}

module.exports = VerificaUsuarioLogado;

//req.session.destroy ao fazer logout