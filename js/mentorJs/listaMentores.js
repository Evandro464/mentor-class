
const pesquisar  = async ()=>{
    if(event.key === 'Enter') {
        const inputPesquisa = document.getElementById ("txtBusca");
        let valorPesquisa = inputPesquisa.value;
        let valorPesquisaFinal = '';

        if(valorPesquisa) {
            valorPesquisaFinal ='?q=' + valorPesquisa;
        }
        const respons = await fetch('https://api-mentorclass.onrender.com/mentores/' + valorPesquisaFinal )
        const listaMentoresJson = await respons.json()
        renderNovo(listaMentoresJson);
    }

}
const getMentoresPesquisa = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/mentores" );
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
    listaMentores.forEach(mentor => {    
    tabela.innerHTML = tabela.innerHTML + 
        '<tr> ' +
            '<td> ' + mentor.nome + '</td>' +
            '<td> ' + mentor.email + '</td>' +  
            '<td class="td-button"><a href="#" class = "a-href-editar" onclick="editmentor('+ mentor.id+')"><span class="material-symbols-outlined">edit</span></a><a href="#" class = "a-href-delete" onclick="deletar('+ mentor.id+')"><span class="material-symbols-outlined">delete</span></a></td>'  
        '</tr>';
        console.log(mentor);
   });
}
const editmentor=(mentorid)=>{
    console.log(mentorid)
    window.location="../mentor/edicaoMentor.html?id=" + mentorid
}

const getNovo = async () => {
    const response = await fetch("https://api-mentorclass.onrender.com/mentores" );
    const listaMentoresJson = await response.json();

//console.log(listaMentores);
renderNovo(listaMentoresJson);


}
const deletar = async (id) => {

    if(confirm("Deseja deletar o item?")){
        await fetch('https://api-mentorclass.onrender.com/mentores/' + id, {
        method:'DELETE'              
        });
        window.location="../mentor/listaMentores.html";

        alert ("O mentor foi excluido!");
        return;
    }          
    return;
}

getNovo();

