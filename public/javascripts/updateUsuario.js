function update(e) {
    //let frmPerfil = document.getElementById(formPerfil);
    let id = formPerfil.id.value;
    let nome_completo = formPerfil.nome_completo.value;
    let nome_social = formPerfil.nome_social.value;
    let genero = formPerfil.genero.value;
    let cpf = formPerfil.cpf.value;
    let data_nascimento = formPerfil.data_nascimento.value;
    let descricao_bio = formPerfil.descricao_bio.value;

    $.ajax({
        type: 'POST',
        url: "/users",
        //contentType: "application/json; charset=utf-8",
        data: { id, nome_completo, nome_social, genero, cpf, data_nascimento, descricao_bio },
        success: function (data) {
            //alert('Atualizado com sucesso!');
            //$('#editPerfil').modal('hide');
            //document.getElementById('editPerfil').setAttribute('data-dismiss', 'modal');
            //location.reload();
            let nomeUsuario = document.getElementById('nomeUsuario');
            nomeUsuario.innerText = data[0].nome_completo;
            nomeUsuario.innerHTML += " - <a href='#!' data-toggle='modal' data-target='#editPerfil'><i class='fas fa-user-edit'></i></a>" 
           
            document.getElementById('pDescricao').innerText = data[0].descricao_bio;
        },
        erro: function (ex) {
            alert('Falha ao curtir post! ' + ex);
        }
    });
}

function atualPerfil(e){
    //let id = e; 
    let form = formImagePerfil;
    let data = new FormData(form);
    console.log(data);
    $.ajax({
        type: 'POST',
        url: '/users/imgperfil',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data: data,
        success: function (data) {
            //formPerfil.foto_perfil.value = data[0].foto_perfil;
            document.getElementById('imagenPerfil').src = data[0].foto_perfil;
            document.getElementById('imagenPerfildois').src = data[0].foto_perfil;
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    })
}