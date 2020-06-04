let btnCriarPublic = document.getElementById('btnCriarPublic');

btnCriarPublic.addEventListener('click', function() {
    document.getElementById('janela-publicar').classList.toggle('active');
});

btnfchPublic.addEventListener('click', function() {
    document.getElementById('janela-publicar').classList.toggle('active');
});

function publicImag(){
    let janelaPublicar = document.getElementById('janela-publicar');
    janelaPublicar.classList.toggle('imagem');
    let imagePost = document.createElement('img');
    imagePost.setAttribute('id', 'imagePost');
    imagePost.setAttribute('src', './images/servicos/mascara-de-hidratacao.jpg');

    let divimgPost = document.getElementById('divimgPost');
    divimgPost.appendChild(imagePost);

}