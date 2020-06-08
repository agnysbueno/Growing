// let btnMudarPerfil2 = document.getElementById('btnMudarPerfil2');//Pega o botão do modal
// let formMudarPerfil = document.getElementById('formMudarPerfil');//Form do modal

// btnMudarPerfil2.addEventListener('click', function() {
//     document.getElementById('janela-profissional').classList.toggle('active');
// });//Abre o modal

// btnfchPublic.addEventListener('click', function() {
//     document.getElementById('janela-profissional').classList.toggle('active');
// });//Fecha o modal

// formMudarPerfil.addEventListener('submit', function(e){
//     e.preventDefault();
//     let cnpj = document.getElementById('cnpj');
//     let razao_social = document.getElementById('razao_social');
//     let nome_fantasia = document.getElementById('nome_fantasia');
//     let inscricao_estadual = document.getElementById('inscricao_estadual');
//     let inscricao_municipal = document.getElementById('inscricao_municipal');
//     let fk_usuario = id;
//     let dados = {cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal,fk_usuario};
//     let settings = {
//         method:'POST',
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(dados)
//     };
//     fetch('/profissionais/salvarProfissional', settings)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(dados){
//         console.log(dados);
//         document.getElementById('janela-profissional').classList.toggle('active');
//         virarProfissional(dados.id, dados.texto, dados.imagem, dados.data, dados.nome, dados.perfil);
//     })
    
// })


// function mudarP(e) {
//     let id = formMudarP.id.value;
//     let formMudarP = document.getElementById(formMudarP);
//     // let id = formMudarP.id.value;
//     // let cnpj = formMudarP.cnpj.value;
//     // let razao_social = formMudarP.razao_social.value;
//     // let nome_fantasia = formMudarP.nome_fantasia.value;
//     // let inscricao_estadual = formMudarP.inscricao_estadual.value;
//     // let inscricao_municipal = formMudarP.inscricao_municipal.value;
//     // let fk_usuario = formMudarP.fk_usuario.value;
//     let cnpj = document.getElementById('cnpj');
//     let razao_social = document.getElementById('razao_social');
//     let nome_fantasia = document.getElementById('nome_fantasia');
//     let inscricao_estadual = document.getElementById('inscricao_estadual');
//     let inscricao_municipal = document.getElementById('inscricao_municipal');
//     let fk_usuario = id;

//     $.ajax({
//         type: 'POST',
//         url: "/profissionais",
        
//         data: { id, cnpj, razao_social, nome_fantasia, inscricao_estadual, inscricao_municipal, fk_usuario},
//         success: function (data) {
//             //alert('Atualizado com sucesso!');
//             //$('#formMudarP').modal('hide');
//             //document.getElementById('formMudarP').setAttribute('data-dismiss', 'modal');
//             //location.reload();
//             let nomeUsuario = document.getElementById('nomeUsuario');
//             nomeUsuario.innerText = data[0].nome_fantasia;
//             nomeUsuario.innerHTML += " - <a href='#!' data-toggle='modal' data-target='#editPerfil'><i class='fas fa-user-edit'></i></a>" 
//         },
//         erro: function (ex) {
//             alert('Falha ao mudar para o perfil profissional! ' + ex);
//         }
//     });
// }