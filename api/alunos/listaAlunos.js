const renderNovo = (listaMentores) =>{
    // criando variavel 
    const tabela = document.querySelector("tbody");

    listaMentores.forEach(aluno => {    
    tabela.innerHTML = tabela.innerHTML + 
        '<tr> ' +
            '<td> ' + aluno.nome + '</td>' +
            '<td> ' + aluno.email + '</td>' +  
            '<td class="td-action"> <button type ="button" onclick="editAluno('+ aluno.id+')" >editar</button ><button type ="button" onclick="deletar('+ aluno.id+')" >Deletar</button ></td>'  
        '</tr>';
        console.log(aluno);
   });
}
const editAluno=(alunoid)=>{
    console.log(alunoid)
    window.location="../alunos/cadastroEdicaoAlunos/edideAluno.html?id=" + alunoid
}

const getNovo = async () => {
    const response = await fetch("http://localhost:3000/alunos" );
    const listaAlunosJson = await response.json();

//console.log(listaMentores);
renderNovo(listaAlunosJson);


}
const deletar = async (id) => {

    if(confirm("Deseja deletar o item?")){
        await fetch('http://localhost:3000/alunos/' + id, {
        method:'DELETE'              
        });
        window.location="listaAlunos.html";

        alert ("O mentor foi excluido!");
        return;
    }          
    return;
}

getNovo();
