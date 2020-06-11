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

Comentario.findAll({include:'Post'}).then(
    data => {
        console.log(data.map(c => c.toJSON()));
    }
)