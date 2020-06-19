
let btnCriarPublic = document.getElementById('btnCriarPublic');
let formPostagem = document.getElementById('formPostagem');

btnCriarPublic.addEventListener('click', function() {
    document.getElementById('nova-postagem').classList.toggle('visivel');
});

btnfchPublic.addEventListener('click', function() {
    document.getElementById('nova-postagem').classList.toggle('visivel');
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
        let novaPost = document.getElementById('txtNovaPostagem');
        let filePost = document.getElementById('filePosts');
        let divImgPost = document.getElementById('divimgPost');
        novaPost.value = '';
        filePost.value = '';
        divImgPost.innerText = '';
        document.getElementById('nova-postagem').classList.toggle('visivel');
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
    imagePost.setAttribute('src', '/images/postagens/' + e);

    let imgName = document.createElement('input');
    imgName.setAttribute('type', 'hidden');
    imgName.setAttribute('name', 'imagem');
    imgName.setAttribute('value', '/images/postagens/' + e);

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

function editImg(e){
    let substImg = e.replace('/images/postagens/', '')
    let janelaPublicar = document.getElementById('janela-editar-publicacao');
    janelaPublicar.classList.toggle('imagem');
    let imagePost = document.createElement('img');
    imagePost.setAttribute('id', 'imageEditPost');
    imagePost.setAttribute('src', '/images/postagens/'+ substImg);

    let imgName = document.createElement('input');
    imgName.setAttribute('type', 'hidden');
    imgName.setAttribute('name', 'imagem');
    imgName.setAttribute('value', '/images/postagens/' + substImg);

    let linkDelimg = document.createElement('a');
    linkDelimg.setAttribute('href', '#');
    linkDelimg.setAttribute('id', 'btnExcluirEditImg');
    linkDelimg.setAttribute('onclick', 'excluirImg("'+ e +'")')

    let faTimesCircle = document.createElement('i');
    faTimesCircle.setAttribute('class', 'fas fa-times-circle fa-3x');

    linkDelimg.appendChild(faTimesCircle);

    let divimgPost = document.getElementById('divimgEditPost');   
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
            let divimgEditPost = document.getElementById('divimgEditPost');  
            divimgPost.innerText = ''; 
            divimgEditPost.innerText = '';
            let janelaPublicar = document.getElementById('janela-publicar');
            let janelaEditPublic = document.getElementById('janela-editar-publicacao');
            janelaPublicar.classList.toggle('imagem');
            janelaEditPublic.classList.toggle('imagem');
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

    let divColmd7 = document.createElement('div');
    divColmd7.setAttribute('class', 'col-md-7');

    let divColmd2 = document.createElement('div');
    divColmd2.setAttribute('class', 'col-md-2');

    let divColmd12Img = document.createElement('div');
    divColmd12Img.setAttribute('class', 'col-md-12');
    divColmd12Img.setAttribute('id', 'imgDiv' + id);

    let linkMenuPost = document.createElement('a');
    linkMenuPost.setAttribute('href', '#');
    linkMenuPost.setAttribute('id', 'btnMenuPost_' + id);
    linkMenuPost.setAttribute('class', 'btn-menu-post');
    linkMenuPost.setAttribute('onclick', 'abrirMenuPost('+ id +'); event.stopPropagation();');

    let faEllipsis = document.createElement('i');
    faEllipsis.setAttribute('class', 'fas fa-ellipsis-h');

    let menuPost = document.createElement('div');
    menuPost.setAttribute('id', 'menuPost_' + id);
    menuPost.setAttribute('class', 'menu-postagem bg-white');

    let ulMenu = document.createElement('ul');
    ulMenu.setAttribute('class', 'list-group list-group-flush');

    let liEdit = document.createElement('li');
    liEdit.setAttribute('class', 'list-group-item');

    let linkEdit = document.createElement('a');
    linkEdit.setAttribute('href', '#');
    linkEdit.setAttribute('onclick', 'formEditar('+ id +')');

    let faPencil = document.createElement('i');
    faPencil.setAttribute('class', 'fas fa-pencil-alt');

    let liExcl = document.createElement('li');
    liExcl.setAttribute('class', 'list-group-item');

    let linkExcl = document.createElement('a');
    linkExcl.setAttribute('href', '#');
    linkExcl.setAttribute('onclick', "deletePost('"+ id +"', 'corpo-nova-postagem', '"+ imagem +"')")

    let faTrash = document.createElement('i');
    faTrash.setAttribute('class', 'fas fa-trash-alt');

    let spanNomeUsuario = document.createElement('span');
    spanNomeUsuario.setAttribute('class', 'nomeUsuarioPost');
    spanNomeUsuario.innerText = nomeUsuario;

    let br = document.createElement('br');

    let spanDataPost = document.createElement('div');
    spanDataPost.setAttribute('class', 'dataPostagem');
    let data = new Date()
    let dia = data.getDate().toString();
    let diaF = (dia.length == 1) ? '0'+dia : dia;
    let mes = (data.getMonth()+1).toString();
    let mesF = (mes.length == 1) ? '0'+mes : mes;
    let anoF = data.getFullYear();
    spanDataPost.innerText = "Postado em: " + diaF + "/" + mesF + "/" + anoF ;

    let p = document.createElement('p');
    p.setAttribute('id', 'pgf_' + id);
    p.innerText = texto;

    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class', 'row');

    let divColmd12 = document.createElement('div');
    divColmd12.setAttribute('class', 'col-md-12');

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'menu-status');

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
   
    let divColmd12Coments = document.createElement('div');
    divColmd12Coments.setAttribute('class', 'col-md-12');

    let pComents = document.createElement('p');
    pComents.innerHTML = '<i class="fas fa-comments text-color-primary"></i> 0';
    
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
    
    divColmd7.appendChild(spanNomeUsuario);
    divColmd7.appendChild(br);
    divColmd7.appendChild(spanDataPost);
    divColmd7.appendChild(p);
    
    //linkEdit.appendChild(faPencil);
    //linkExcl.appendChild(faTrash);
    linkEdit.innerHTML = '<i class="fas fa-pencil-alt"></i> Editar';
    linkExcl.innerHTML = '<i class="fas fa-trash-alt"></i> Excluir';
    
    liEdit.appendChild(linkEdit);
    liExcl.appendChild(linkExcl);
    
    ulMenu.appendChild(liEdit);
    ulMenu.appendChild(liExcl);
    
    menuPost.appendChild(ulMenu);
    
    linkMenuPost.appendChild(faEllipsis);
    
    divColmd2.appendChild(linkMenuPost);
    divColmd2.appendChild(menuPost);
    
    if(imagem){
        let pImg = document.createElement('p');
        let imgPost = document.createElement('img');
        imgPost.setAttribute('src', imagem);
        imgPost.setAttribute('class', 'imagem-postada');
        imgPost.setAttribute('id', 'img_' + id);

        pImg.appendChild(imgPost);
        divColmd12Img.appendChild(pImg);
    }
    
    divColmd12Coments.appendChild(pComents);
    divMenuCriarStatus.appendChild(divColmd12Coments);
    
    divColmd12_2.appendChild(hr);
    divColmd12_2.appendChild(divMenuCriarStatus);
    
    divRow.appendChild(divColmd3);
    divRow.appendChild(divColmd7);
    divRow.appendChild(divColmd2);
    divRow.appendChild(divColmd12Img);
    divRow.appendChild(divColmd12_2);

    divCardPost.appendChild(divRow);
    //corpoPostagens.appendChild(divCardPost);
    //cardNew.classList.add('bg-white');
    //cardNew.appendChild(divRow);
    corpoNovaPostagem.appendChild(divCardPost);

}



function deletePost(e, nomediv, img){
    let dados = { idPost: e, imagem:img };
    let settings = {
        method:'DELETE',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    }
    fetch('/posts/delete', settings)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let corpoPost = document.getElementById(nomediv);
        let cardPost = document.getElementById('cardPost_' + e);
        console.log(cardPost);
        corpoPost.removeChild(cardPost);
    })
}




let btnfchEditPublic = document.getElementById('btnfchEditPublic')
btnfchEditPublic.addEventListener('click', function() {
    document.getElementById('editar-postagem').classList.toggle('visivel');
});

function formEditar(e){
    let dados = { id:e };
    let settings = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    };
    fetch('/posts/carregar', settings)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        document.getElementById('editar-postagem').classList.toggle('visivel');
        document.getElementById('menuPost_' + e).classList.toggle('active');
        let idPost = document.getElementById('idPost');
        idPost.setAttribute('value', data[0].id);
        document.getElementById('textPostagem').value = data[0].texto;
        // let divImg = document.getElementById('divimgPost_' + e);
        if(data[0].imagem){
             editImg(data[0].imagem);
        }
        else{
            let divimgPost = document.getElementById('divimgEditPost');   
            divimgPost.innerText = '';
            document.getElementById('janela-editar-publicacao').classList.toggle('imagem');
            let imgName = document.createElement('input');
            imgName.setAttribute('type', 'hidden');
            imgName.setAttribute('name', 'imagem');
            imgName.setAttribute('value', '');
            //divimgPost.appendChild(divimgPost);
        }

    })
}

let formEditarPostagem = document.getElementById('formEditarPostagem');
formEditarPostagem.addEventListener('submit', function(e){
    e.preventDefault();
    let dados = { 
        idPost:formEditarPostagem.id.value,
        texto:formEditarPostagem.texto.value,
        imagem:(formEditarPostagem.imagem) ? formEditarPostagem.imagem.value : ''
    };
    let settings = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    };
    fetch('/posts/update', settings)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data[0]);
        let pgf = document.getElementById('pgf_'+ data[0].id);
        pgf.innerText = data[0].texto;
        if(data[0].imagem){
            let imgDiv = document.getElementById('imgDiv' + data[0].id);
            imgDiv.innerText = '';
            let img = document.createElement('img');
            img.setAttribute('id', 'img_'+ data[0].id);
            img.setAttribute('src', data[0].imagem);
            img.setAttribute('class', 'imagem-postada');
            imgDiv.appendChild(img);
        } 
        document.getElementById('editar-postagem').classList.toggle('visivel');
    })

});


let fileEditPosts = document.getElementById('fileEditPosts')
fileEditPosts.addEventListener('change', function(){
    imagemEditUpload();
});


function imagemEditUpload(){
    let form = document.getElementById('formEditarPostagem');
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
            editImg(data);
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    });

}




