function update(e) {
   
    let id = formPerfil.id.value;
    let nome_completo = formPerfil.nome_completo.value;
    let nome_social = formPerfil.nome_social.value;
    let genero = formPerfil.genero.value;
    let cpf = formPerfil.cpf.value;
    let data_nascimento = formPerfil.data_nascimento.value;
    let descricao_bio = formPerfil.descricao_bio.value;

    $.ajax({
        type: 'POST',
        url: '/users',
        data: { id, nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio },
        success: function (data) {
            //formPerfil.foto_perfil.value = data[0].foto_perfil;
            let nomeUsuario = document.getElementById('nomeUsuario');
            nomeUsuario.innerText = data[0].nome_completo;
            nomeUsuario.innerHTML += " - <a href='#!' data-toggle='modal' data-target='#editPerfil'><i class='fas fa-user-edit'></i></a>" 
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    });
   
}


function atualPerfil(e){
    //let id = e; 
    let form = formImagePerfil;
    let dados = new FormData(form);
    //console.log(data);
    $.ajax({
        type: 'POST',
        url: '/users/imgperfil',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data: dados,
        success: function (data) {
            let imag1 = document.getElementById('imagenPerfil');
            imag1.src = data[0].foto_perfil;
            let imag2 = document.getElementById('imagenPerfildois');
            imag2.src = data[0].foto_perfil;
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    });
}