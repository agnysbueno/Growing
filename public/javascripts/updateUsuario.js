function update(e) {
    //let frmPerfil = document.getElementById(formPerfil);
    let id = formPerfil.id.value;
    let nome_completo = formPerfil.nome_completo.value;

    $.ajax({
        type: 'POST',
        url: "/users",
        //contentType: "application/json; charset=utf-8",
        data: { id, nome_completo },
        success: function (data) {
            alert('Atualizado com sucesso!');
            document.getElementById('formPerfil').modal('hide');
            location.reload();
        },
        erro: function (ex) {
            alert('Falha ao curtir post!' + ex);
        }
    });
}