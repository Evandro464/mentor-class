const renderNovo = (listaMentores) =>{
    // criando variavel 
    const tabela = document.querySelector("tbody");

    listaMentores.forEach(mentor => {    
    tabela.innerHTML = tabela.innerHTML + 
        '<tr> ' +
            '<td> ' + mentor.nome + '</td>' +
            '<td> ' + mentor.email + '</td>' +  
            '<td class="td-action"> <button type ="button" onclick="editmentor('+ mentor.id+')" >editar</button ><button type ="button" onclick="deletar('+ mentor.id+')" >Deletar</button ></td>'  
        '</tr>';
        console.log(mentor);
   });
}
const editmentor=(mentorid)=>{
    console.log(mentorid)
    window.location="../mentores/cadastroEdicaoMentor/edicaoMentor.html?id=" + mentorid
}

const getNovo = async () => {
    const response = await fetch("http://localhost:3000/mentores" );
    const listaMentoresJson = await response.json();

//console.log(listaMentores);
renderNovo(listaMentoresJson);


}
const deletar = async (id) => {

    if(confirm("Deseja deletar o item?")){
        await fetch('http://localhost:3000/mentores/' + id, {
        method:'DELETE'              
        });
        window.location="../mentores/listaMentores.html";

        alert ("O mentor foi excluido!");
        return;
    }          
    return;
}

getNovo();

