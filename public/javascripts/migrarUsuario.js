function update(e) {
    let mudarPerfil = document.getElementById(mudarPerfil);
    // let id = mudarPerfil.id.value;
    let cnpj = mudarPerfil.cnpj.value;
    let razao_social = mudarPerfil.razao_social.value;
    let nome_fantasia = mudarPerfil.nome_fantasia.value;
    let inscricao_estadual = mudarPerfil.inscricao_estadual.value;
    let inscricao_municipal = mudarPerfil.inscricao_municipal.value;
    let fk_usuario = mudarPerfil.fk_usuario.value;

    $.ajax({
        type: 'POST',
        url: "/servicos",
        contentType: false,
        cache: false,
        data: { cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario },
        success: function (data) {
            //alert('Atualizado com sucesso!');
            //$('#mudarPerfil').modal('hide');
            //document.getElementById('mudarPerfil').setAttribute('data-dismiss', 'modal');
            //location.reload();
            let nomeUsuario = document.getElementById('nomeUsuario');
            nomeUsuario.innerText = data[0].nome_fantasia;
            nomeUsuario.innerHTML += " - <a href='#!' data-toggle='modal' data-target='#editPerfil'><i class='fas fa-user-edit'></i></a>" 
        },
        erro: function (ex) {
            alert('Falha ao mudar para o perfil profissional! ' + ex);
        }
    });
}