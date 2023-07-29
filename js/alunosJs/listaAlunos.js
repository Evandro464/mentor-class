
const pesquisar  = async ()=>{
    if(event.key === 'Enter') {
        const inputPesquisa = document.getElementById ("txtBusca");
        let valorPesquisa = inputPesquisa.value;
        let valorPesquisaFinal = '';

        if(valorPesquisa) {
            valorPesquisaFinal ='?q=' + valorPesquisa;
        }
        const respons = await fetch('https://api-mentorclass.onrender.com/alunos/' + valorPesquisaFinal )
        const listaMentoresJson = await respons.json()
        renderNovo(listaMentoresJson);
    }

}
const getMentoresPesquisa = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/alunos" );
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

    listaMentores.forEach(aluno => {    
    tabela.innerHTML = tabela.innerHTML + 
        '<tr> ' +
            '<td> ' + aluno.nome + '</td>' +
            '<td> ' + aluno.email + '</td>' +  
            '<td class="td-button"><a href="#" class = "a-href-editar" onclick="editAluno('+ aluno.id+')"><span class="material-symbols-outlined">edit</span></a><a href="#" class = "a-href-delete" onclick="deletar('+ aluno.id+')"><span class="material-symbols-outlined">delete</span></a></td>'  
        '</tr>';
        console.log(aluno);
   });
}
const editAluno=(alunoid)=>{
    console.log(alunoid)
    window.location="../Alunos/editeAluno.html?id=" + alunoid
}

const getNovo = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/alunos" );
    const listaAlunosJson = await response.json();

//console.log(listaMentores);
renderNovo(listaAlunosJson);


}
const deletar = async (id) => {

    if(confirm("Deseja deletar o item?")){
        await fetch('https://api-mentorclass.onrender.com/alunos/' + id, {
        method:'DELETE'              
        });
        window.location="listaAlunos.html";

        alert ("O Aluno foi excluido!");
        return;
    }          
    return;
}

getNovo();

