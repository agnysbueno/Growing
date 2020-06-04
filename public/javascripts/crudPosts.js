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
    }
    console.log(JSON.stringify(dados));
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




