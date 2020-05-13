// const bcrypt = require('bcrypt');
// const { Usuario, Post, Comentario } = require('../models');
// const AuthController = {
    
//     showLogin: (req,res) => {
//         res.render('auth/login');
//     },

//     showRegistro: (req,res) => {
//         res.render('auth/register');
//     },

//     showHome: async (req,res) => {
//         let posts = await Post.findAll({
//             include: [
//                 {   
//                     model:Comentario,
//                     as: 'comentarios',
//                     include: 'usuario'
//                  }, 
//                 'usuario'
//             ] 
//         });

//         res.render('index', {posts});
//     },

//     login: async (req, res) => {
//         //recebendo as informações do body
//         const { email, senha } = req.body;

//         //procurando um usuário
//         const user = await Usuario.findOne(
//             { where:
//                 { email }
//             }
//         );

//         //redirecionando para tela de erro se o usuário não existir
//         if(!user) {
//             res.redirect('/login?error=1');
//         }

//         //validar senha
//         if(!bcrypt.compareSync(senha, user.senha)){
//             res.redirect('/login?error=1');
//         }

//         //setando uma sessiona com o usuário
//         req.session.usuario = user;

//         //redirecionando para página inicial
//         res.redirect('/home');

//     }

// }

// module.exports = AuthController;