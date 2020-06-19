
function coment(e){
    let texto = document.getElementById('commentText'+e);
    console.log(texto.value);
    let dados = { texto:texto.value, fk_post:e }
    console.log(dados);
    let settings = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dados)
    }
    fetch('/comentarios/salvarComentario', settings)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        texto.value = '';
        let divComents = document.getElementById('coments-' + e);
        let divComent = document.createElement('div');
        divComent.setAttribute('id', 'coment'+data.id);
        divComent.setAttribute('class', 'comentario');

        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');

        let divColmd2 = document.createElement('div');
        divColmd2.setAttribute('class', 'col-md-2');

        let divPerfil = document.createElement('div');
        divPerfil.setAttribute('class', 'perfil-usuario-coment');
        divPerfil.setAttribute('id', 'perfil-post-img');

        let linkImgPerf = document.createElement('a');
        linkImgPerf.setAttribute('href', '/users/'+ data.Userid);

        let img = document.createElement('img');
        img.setAttribute('src', data.perfil);
        img.setAttribute('id', 'imagenPerfilPost');

        let divColmd10 = document.createElement('div');
        divColmd10.setAttribute('class', 'col-md-10');

        let divText = document.createElement('div');
        divText.setAttribute('class', 'texto-coment');
        divText.innerText = data.texto;
        divText.innerHTML = "<span><a href='/users/"+ data.Userid +"'>" + data.nome + "</a></span><br>" + data.texto;

        let span = document.createElement('span');
        let linkNomUser = document.createElement('a');
        linkNomUser.innerText = data.nome;

        let linkMenu = document.createElement('a');
        linkMenu.setAttribute('href', '#');
        linkMenu.setAttribute('class', 'btn-menu-coment');
        linkMenu.setAttribute('id', 'btnMenuComent' + data.id);
        linkMenu.setAttribute('onclick', 'abrirMenuComent('+ data.id +')');
        
        let faEllipisis = document.createElement('i');
        faEllipisis.setAttribute('class', 'fas fa-ellipsis-h');

        let divMenuComent = document.createElement('div');
        divMenuComent.setAttribute('id', 'menuComent_' + data.id);
        divMenuComent.setAttribute('class', 'menu-coment bg-white');

        let ulMenu = document.createElement('ul');
        ulMenu.setAttribute('class', 'list-group list-group-flush');

        let liEdit = document.createElement('li');
        liEdit.setAttribute('class', 'list-group-item');

        let liExcl = document.createElement('li');
        liExcl.setAttribute('class', 'list-group-item');

        let linkEdit = document.createElement('a');
        linkEdit.setAttribute('href', '#');
        linkEdit.setAttribute('onclick', 'formEditarCoc('+ data.id +')');
        linkEdit.innerHTML = '<i class="fas fa-pencil-alt"></i> Editar';

        let linkExcl = document.createElement('a');
        linkExcl.setAttribute('href', '#');
        linkExcl.setAttribute('onclick', "deleteComent('"+ data.id+"', 'coments-" + data.idPost + "')");
        linkExcl.innerHTML = '<i class="fas fa-trash-alt"></i> Excluir';


        linkImgPerf.appendChild(img);
        divPerfil.appendChild(linkImgPerf);
        divColmd2.appendChild(divPerfil);
        divRow.appendChild(divColmd2);
       
        divColmd10.appendChild(divText);
        linkMenu.appendChild(faEllipisis);

        liEdit.appendChild(linkEdit);
        liExcl.appendChild(linkExcl);
        
        ulMenu.appendChild(liEdit);
        ulMenu.appendChild(liExcl);
        divMenuComent.appendChild(ulMenu);

        divColmd10.appendChild(linkMenu);
        divColmd10.appendChild(divMenuComent);
        divRow.appendChild(divColmd10);

        divComent.appendChild(divRow);
        divComents.appendChild(divComent);


    })
}


function formEditarCom(e){

}

function deleteComent(e, coment){
    let settings = {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id:e})
    }
    fetch('/comentarios/delete', settings)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let corpoComent = document.getElementById(coment);
        let lineComent = document.getElementById('coment' + e);
        //console.log(cardPost);
        corpoComent.removeChild(lineComent);
    })
}
