function toggleSidebar(){
    document.getElementById('side-bar').classList.toggle('active');
    document.getElementById('main').classList.toggle('active');
}

let menuPerfil = document.getElementById('menuPerfil');
let menuHeader = document.getElementById('menuHeader');
let menuPost;
let menuComent;
document.addEventListener('click', function(){
    menuPerfil.classList.remove('visivel')
    menuHeader.classList.remove('visivel')
    if(menuPost){
        menuPost.classList.remove('active');
    }
    if(menuComent){
        menuComent.classList.remove('active');
    }
    // let menuPost = document.querySelectorAll('.menu-postagem.bg-white.active');
    // menuPost.classList.remove('active');
})


let perfilImgHeader = document.getElementById('perfilImgHeader');
perfilImgHeader.addEventListener('click', function(e){
    e.stopPropagation();
    //menuPerfil.classList.toggle('visivel');
    if(menuPerfil.classList.value == "menu-perfil visivel"){
        menuPerfil.classList.remove('visivel')
    } else {
        menuPerfil.classList.add('visivel');
    }
});

let btnMenuHeader = document.getElementById('btnMenuHeader');
btnMenuHeader.addEventListener('click', function(e){
    //menuHeader.classList.toggle('visivel');
    e.stopPropagation();
    //menuPerfil.classList.toggle('visivel');
    if(menuHeader.classList.value == "nav-header-menu visivel"){
        menuHeader.classList.remove('visivel')
    } else {
        menuHeader.classList.add('visivel');
    }
});


function abrirMenuPost(id){
    //this.Event();
    menuPost = document.getElementById('menuPost_' + id);
    if(menuPost.classList.value == 'menu-postagem bg-white active'){
        menuPost.classList.remove('active');
    } else {
        menuPost.classList.add('active');
    }
}


function abrirMenuComent(e){
     menuComent = document.getElementById('menuComent_' + e);
     if(menuComent.classList.value == 'menu-coment bg-white active'){
         menuComent.classList.remove('active');
     } else {
         menuComent.classList.add('active');
     }
}
