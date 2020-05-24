const { sequelize, Post, Comentario } = require('../models');

// Post.findAll({include: [
//         {   
//             model:Comentario,
//             as: 'comentarios',
//             include: 'usuario'
//         }, 
//         'usuario'
//     ] }).then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
        
//         //data é um array de posts
//         //console.log(data[0].comentarios[0].usuario.nome)
//         //a linha acima retorna o nome do usuário que fez o primeiro comentário no primeiro post
//         sequelize.close();
//     }
// )
// Post.findAll().then(
//     data => {
//         console.log(data.map(p => p.toJSON()))
//     }
// )

let posts = Post.create({texto: 'teste de post', data_postagem: '2020-05-24 07:42:00', fk_usuario: 2})
console.log(posts);