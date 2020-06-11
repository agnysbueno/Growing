const { sequelize, Post, Comentario } = require('../models');

// Post.findByPk(1).then(
//     post => {
//         post.getComentarios().then(
//             (comentarios) => {
//                 console.log(comentarios.map(comentario => comentario.toJSON()));
//                 sequelize.close();
//             }
//         );
//     }
// )

// Comentario.findAll({include:'Post'}).then(
//     data => {
//         console.log(data.map(c => c.toJSON()));
//     }
// )
let data = new Date();
let comit = Comentario.create({texto:"Testando comentário 2", data_comentario:data, fk_post:31, fk_usuario:2});

Comentario.findAll({include:'Post'}, {where:{ id:31 }}).then(
     data => {
        console.log(data.map(c => c.toJSON()));
     }
)