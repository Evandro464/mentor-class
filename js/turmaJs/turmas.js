
const pesquisar  = async ()=>{
    if(event.key === 'Enter') {
        const inputPesquisa = document.getElementById ("txtBusca");
        let valorPesquisa = inputPesquisa.value;
        let valorPesquisaFinal = '';

        if(valorPesquisa) {
            valorPesquisaFinal ='?q=' + valorPesquisa;
        }
        const respons = await fetch('https://api-mentorclass.onrender.com/turmas/' + valorPesquisaFinal )
        const listaMentoresJson = await respons.json()
        renderNovo(listaMentoresJson);
    }

}
const getMentoresPesquisa = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/turmas" );
    const listaMentoresJson = await response.json();

//console.log(listaMentores);
    renderNovo(listaMentoresJson);
}

const renderNovo = (listaMentores) =>{
    // criando variavel 
    const tabelaAntiga = document.querySelector("tbody");
    let newTabela = document.createElement('tbody');
    tabelaAntiga.parentNode.replaceChild(newTabela, tabelaAntiga);

    const tabela = document.querySelector("tbody");

    listaMentores.forEach(turma => {    
    tabela.innerHTML = tabela.innerHTML + 
        '<tr> ' +
            '<td> ' + turma.turmas + '</td>' +
            '<td> ' + turma.mentor + '</td>' +  
            '<td> ' + turma.mentoria + '</td>' +  
            '<td> ' + turma.data + '</td>' +  
            '<td> ' + turma.semana + '</td>' +  
            '<td> ' + turma.horario1 + ' / ' + turma.horario2 + '</td>' +  
            '<td> ' + turma.encontros + '</td>' +  
            '<td class="td-button"> <a href="#" class = "a-href-editar" onclick="editeturma('+ turma.id+')"><span class="material-symbols-outlined">edit</span></a>&ensp;<a href="#" class = "a-href-delete" onclick="deletar('+ turma.id+')"><span class="material-symbols-outlined">delete</span></a></td>'  
        '</tr>';
        console.log(turma);
   });
}
const editeturma=(turmaId)=>{
    console.log(turmaId)
    window.location="editeTurma.html?id="+turmaId
}

const getNovo = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/turmas" );
    const listaTurmasJson = await response.json();

    //console.log(listaMentores);
    renderNovo(listaTurmasJson);
}

const deletar = async (id) => {
    if(confirm("Deseja deletar o item?")){
      await fetch('https://api-mentorclass.onrender.com/turmas/' + id, {
          method:'DELETE'              
      });
      window.location="turmas.html";
  
      alert ("a turma foi excluida!");
      return;
    }
    return;  
}

getNovo();