const { sequelize, Usuario, Post } = require('../models');

// Usuario.findByPk(1).then(
//     usuario => {
//         usuario.getPosts().then(
//             (posts) => {
//                 console.log(posts.map(post => post.toJSON()));
//                 sequelize.close();
//             }
//         );
//     }
// )

// Usuario.findAll({include:[{model:Post, as:'Post', order:[Post, 'id', 'DESC']}], where: { id:2 }}).then(
//     data => {
//         console.log(data.map(u => u.toJSON()));
//     }
// )

Post.findAll({include:'Usuario', order: [
    ['id', 'DESC']], where:{ id: 9 }}).then(
    data => {
        console.log(data.map(p => p.toJSON()));
    }
)