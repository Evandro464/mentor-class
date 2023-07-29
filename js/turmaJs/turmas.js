
const pesquisar  = async ()=>{
    if(event.key === 'Enter') {
        const inputPesquisa = document.getElementById ("txtBusca");
        let valorPesquisa = inputPesquisa.value;
        let valorPesquisaFinal = '';

        if(valorPesquisa) {
            valorPesquisaFinal ='?q=' + valorPesquisa;
        }
        const respons = await fetch('http://localhost:3000/turmas/' + valorPesquisaFinal )
        const listaMentoresJson = await respons.json()
        renderNovo(listaMentoresJson);
    }

}
const getMentoresPesquisa = async () => {
    const response = await fetch("http://localhost:3000/turmas" );
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
            '<td class="td-action"> <button type ="button" onclick="editeturma('+ turma.id+')" >editar</button ><button type ="button" onclick="deletar('+ turma.id+')" >Deletar</button ></td>'  
        '</tr>';
        console.log(turma);
   });
}
const editeturma=(turmaId)=>{
    console.log(turmaId)
    window.location="editeTurma.html?id="+turmaId
}
//const deletar=(mentorid)=>{
    //console.log(mentorid)
    
//}

const getNovo = async () => {
    const response = await fetch("http://localhost:3000/turmas" );
    const listaTurmasJson = await response.json();

//console.log(listaMentores);
renderNovo(listaTurmasJson);


}
const deletar = async (id) => {
    if(confirm("Deseja deletar o item?")){
      await fetch('http://localhost:3000/turmas/' + id, {
          method:'DELETE'              
      });
      window.location="turmas.html";
  
      alert ("O mentor foi excluido!");
      return;
    }
    return;
  
}

  
  


getNovo();

