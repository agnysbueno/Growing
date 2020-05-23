function update(e) {
    let formMudarP = document.getElementById(formMudarP);
    // let id = formMudarP.id.value;
    let cnpj = formMudarP.cnpj.value;
    let razao_social = formMudarP.razao_social.value;
    let nome_fantasia = formMudarP.nome_fantasia.value;
    let inscricao_estadual = formMudarP.inscricao_estadual.value;
    let inscricao_municipal = formMudarP.inscricao_municipal.value;
    let fk_usuario = formMudarP.fk_usuario.value;

    $.ajax({
        type: 'POST',
        url: "/profissionais",
        contentType: false,
        cache: false,
        data: { cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario },
        success: function (data) {
            //alert('Atualizado com sucesso!');
            //$('#formMudarP').modal('hide');
            //document.getElementById('formMudarP').setAttribute('data-dismiss', 'modal');
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