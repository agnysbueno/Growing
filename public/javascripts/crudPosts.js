let btnCriarPublic = document.getElementById('btnCriarPublic');
let formPostagem = document.getElementById('formPostagem');

btnCriarPublic.addEventListener('click', function() {
    document.getElementById('janela-publicar').classList.toggle('active');
});

btnfchPublic.addEventListener('click', function() {
    document.getElementById('janela-publicar').classList.toggle('active');
});

formPostagem.addEventListener('submit', function(e){
    e.preventDefault();
    let dados = {
        texto: formPostagem.texto.value,
        imagem: (formPostagem.imagem) ? formPostagem.imagem.value : ''
    };
    let settings = {
        method:'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    };
    fetch('/posts/salvarPost', settings)
    .then(function (response){
        return response.json();
    })
    .then(function(dados){
        console.log(dados);
        document.getElementById('janela-publicar').classList.toggle('active');
        criarPostagem(dados.id, dados.texto, dados.imagem, dados.data, dados.nome, dados.perfil);
    })
    
})


function imagemUpload(){
    let form = document.getElementById('formPostagem');
    let dados = new FormData(form);
    $.ajax({
        type: 'POST',
        url: '/posts/imgposts',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data: dados,
        success: function (data) {
            publicImag(data);
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    });

}

function publicImag(e){
    let janelaPublicar = document.getElementById('janela-publicar');
    janelaPublicar.classList.toggle('imagem');
    let imagePost = document.createElement('img');
    imagePost.setAttribute('id', 'imagePost');
    imagePost.setAttribute('src', './images/postagens/' + e);

    let imgName = document.createElement('input');
    imgName.setAttribute('type', 'hidden');
    imgName.setAttribute('name', 'imagem');
    imgName.setAttribute('value', './images/postagens/' + e);

    let linkDelimg = document.createElement('a');
    linkDelimg.setAttribute('href', '#');
    linkDelimg.setAttribute('id', 'btnExcluirImg');
    linkDelimg.setAttribute('onclick', 'excluirImg("'+ e +'")')

    let faTimesCircle = document.createElement('i');
    faTimesCircle.setAttribute('class', 'fas fa-times-circle fa-3x');

    linkDelimg.appendChild(faTimesCircle);

    let divimgPost = document.getElementById('divimgPost');   
    divimgPost.innerText = '';
    divimgPost.appendChild(linkDelimg);
    divimgPost.appendChild(imagePost);
    divimgPost.appendChild(imgName);

}

function excluirImg(e){
    $.ajax({
        type: 'POST',
        url: '/posts/deleteimg',
        data: { filename: e },
        success: function (data) {
            console.log(data)
            let divimgPost = document.getElementById('divimgPost');   
            divimgPost.innerText = ''; 
            let janelaPublicar = document.getElementById('janela-publicar');
            janelaPublicar.classList.toggle('imagem');
        },
        erro: function (ex){
            alert('Falha ao excluir imagem! ' + ex)
        }

    });
}


let filePosts = document.getElementById('filePosts')
filePosts.addEventListener('change', function(){
    imagemUpload();
});


function criarPostagem(id, texto, imagem, dataPostagem, nomeUsuario, perfil){
    let corpoPostagens = document.getElementById('corpo-postagens');
    let corpoNovaPostagem = document.getElementById('corpo-nova-postagem');
    let cardNew = document.getElementById('cardNew');

    let divCardPost = document.createElement('div');
    divCardPost.setAttribute('class', 'card-post bg-white');
    divCardPost.setAttribute('id', 'cardPost_' + id);

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divColmd3 = document.createElement('div');
    divColmd3.setAttribute('class', 'col-md-3');

    let divPerfilPost = document.createElement('div');
    divPerfilPost.setAttribute('class', 'perfil-usuario-mini');
    divPerfilPost.setAttribute('id', 'perfil-post-img');

    let imgPerfil = document.createElement('img');
    if(perfil){
        imgPerfil.setAttribute('src', perfil)
    } else {
        imgPerfil.setAttribute('src', './images/usuario.png');
    }
    imgPerfil.setAttribute('id', 'imagenPerfilPost')

    let divColmd9 = document.createElement('div');
    divColmd9.setAttribute('class', 'col-md-9');

    let spanNomeUsuario = document.createElement('span');
    spanNomeUsuario.setAttribute('class', 'nomeUsuarioPost');
    spanNomeUsuario.innerText = nomeUsuario;

    let br = document.createElement('br');

    let spanDataPost = document.createElement('div');
    spanDataPost.setAttribute('class', 'dataPostagem');
    spanDataPost.innerText = "Postado em: " + dataPostagem;

    let p = document.createElement('p');
    p.innerText = texto;

    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class', 'row');

    let divColmd12 = document.createElement('div');
    divColmd12.setAttribute('class', 'col-md-12');

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'menu-status');

    let liCurtir = document.createElement('li');

    let liEye = document.createElement('li');

    let liComents = document.createElement('li');

    let faHeart = document.createElement('i');
    faHeart.setAttribute('class', 'fas fa-heart text-color-primary');

    let faEye = document.createElement('i');
    faEye.setAttribute('class', 'fas fa-eye text-color-primary');

    let faComments = document.createElement('i');
    faComments.setAttribute('class', 'fas fa-comments text-color-primary');

    let hr = document.createElement('hr');

    let divMenuCriarStatus = document.createElement('div');
    divMenuCriarStatus.setAttribute('class', 'row');
    divMenuCriarStatus.setAttribute('id', 'menu-criar-status');

    let divColmd12_2 = document.createElement('div');
    divColmd12_2.setAttribute('class', 'col-md-12');

    let divColmd4Curtir = document.createElement('div');
    divColmd4Curtir.setAttribute('class', 'col-md-4');

    let divColmd4Coments = document.createElement('div');
    divColmd4Coments.setAttribute('class', 'col-md-4');

    let divColmd4Compartilhar = document.createElement('div');
    divColmd4Compartilhar.setAttribute('class', 'col-md-4');

    let linkCurtir = document.createElement('a');
    linkCurtir.setAttribute('href', '#');

    let linkComent = document.createElement('a');
    linkComent.setAttribute('href', '#');

    let linkCompartilhar = document.createElement('a');
    linkCompartilhar.setAttribute('href', '#');

    let faHeart2x = document.createElement('i');
    faHeart2x.setAttribute('class', 'fas fa-heart text-color-primary fa-2x');

    let faEye2x = document.createElement('i');
    faEye2x.setAttribute('class', 'fas fa-eye text-color-primary fa-2x');

    let faComments2x = document.createElement('i');
    faComments2x.setAttribute('class', 'fas fa-comments text-color-primary fa-2x');

    divPerfilPost.appendChild(imgPerfil);
    divColmd3.appendChild(divPerfilPost);
    
    
    divColmd9.appendChild(spanNomeUsuario);
    divColmd9.appendChild(br);
    divColmd9.appendChild(spanDataPost);
    divColmd9.appendChild(p);

    
    liCurtir.innerHTML = '<i class="fas fa-heart text-color-primary"></i> 0 ';
    //liCurtir.appendChild(faHeart);
    liEye.innerHTML = '<i class="fas fa-eye text-color-primary"></i> 0 ';
    //liEye.appendChild(faEye);
    //liComents.appendChild(faComments);
    liComents.innerHTML = '<i class="fas fa-comments text-color-primary"></i> 0 ';

    ul.appendChild(liCurtir);
    ul.appendChild(liEye);
    ul.appendChild(liComents);
    
    divColmd12.appendChild(ul);
    
    divMenuCriarStatus.appendChild(divColmd12);
    divRow2.appendChild(divColmd12);
    divColmd9.appendChild(divRow2);
    
    linkCurtir.appendChild(faHeart2x);
    linkComent.appendChild(faEye2x);
    linkCompartilhar.appendChild(faComments2x)
    
    divColmd4Curtir.appendChild(linkCurtir);
    divColmd4Coments.appendChild(linkComent);
    divColmd4Compartilhar.appendChild(linkCompartilhar);
    
    divMenuCriarStatus.appendChild(divColmd4Curtir);
    divMenuCriarStatus.appendChild(divColmd4Coments);
    divMenuCriarStatus.appendChild(divColmd4Compartilhar);
    
    divColmd12_2.appendChild(hr);
    divColmd12_2.appendChild(divMenuCriarStatus);
    
    divRow.appendChild(divColmd3);
    divRow.appendChild(divColmd9);
    divRow.appendChild(divColmd12_2);

    //divCardPost.appendChild(divRow);
    //corpoPostagens.appendChild(divCardPost);
    cardNew.classList.add('bg-white');
    cardNew.appendChild(divRow);
    corpoNovaPostagem.appendChild(cardNew);

}




