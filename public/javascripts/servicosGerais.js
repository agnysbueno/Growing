const consServGerais = (e, u) => {
    $.ajax({
        type: 'POST',
        url: '/users/servicos',
        data: { servico: e },
        success: function (data) {
            
            //let listaServicos = document.getElementById('lista_servicos');
            let cloudTag = document.getElementById('cloud_tag');
            cloudTag.innerText = '';
            for(let serv of data){
                let row = document.createElement('span');
                row.setAttribute('class', 'tag-transparente');
                
                let link = document.createElement('a');
                link.setAttribute('href', '#!');
                link.setAttribute('onclick', 'inserirServico('+ u +', '+ serv.id +')');
                link.innerText = serv.servico;
                
                row.appendChild(link);
                cloudTag.appendChild(row);

            }
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex)
        }

    });
}

let inputPesqServi = document.getElementById('pesqServico');
let id_user = document.getElementById('id_user');
inputPesqServi.onchange = () => { consServGerais(inputPesqServi.value, id_user.value) }

const inserirServico = (u, s) => {
    $.ajax({
        type: 'POST',
        url: '/users/inserirServico',
        data: { fk_usuario: u, fk_servico: s },
        success: function (data) {
            //let cloudTag = document.getElementById('cloud_tag');
            let divPref = document.getElementById('divPref');
            for(let tagCl of data){
                let tag = document.createElement('span');
                tag.setAttribute('class','tag-transparente');
                tag.setAttribute('id', 'spn_' + tagCl.id);
                tag.setAttribute('onclick', 'apagarPref('+ tagCl.id +')')
                tag.innerText = tagCl.ServicoGeral.servico;

                let i = document.createElement('i');
                i.setAttribute('class', 'fas fa-times');

                tag.appendChild(i);
                //cloudTag.appendChild(tag);
                divPref.appendChild(tag);
            }
           
        },
        erro: function (ex){
            alert('Falha ao atualizar imagem! ' + ex);
        }

    });
}


const clouseMenuServicos = () => {
    document.getElementById("menu_pref").style.display = 'none';
}

const apagarPref = (e) => {
    if(window.confirm('Tem certeza que deseja remover essa preferencia?')){
        $.ajax({
            type: 'POST',
            url: '/users/deletePreferencias',
            data: { id: e },
            success: function(data){
                let divPref = document.getElementById('divPref');
                let spanPref = document.getElementById('spn_' + e);
    
                divPref.removeChild(spanPref);
                // divPref.innerText = '';
                // let spanPref = document.createElement('span');
                // spanPref.setAttribute('class', 'tag-transparente');
                // spanPref.setAttribute('id', data.id);
                // spanPref.innerText = data.ServicoGeral.servico;
                
                // let i = document.createElement('i');
                // i.setAttribute('class', 'fas fa-times');
    
                // spanPref.appendChild(i);
                // divPref.appendChild(spanPref);
            }, 
            erro: function(ex){
                alert('Falha ao tentar apagar essa preferencia!');
            }
        });
    }
}