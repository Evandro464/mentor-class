const renderNovo = (listaTurmas) =>{
    // criando variavel 
    const tabela = document.querySelector("tbody");

    listaTurmas.forEach(turma => {    
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
  
      alert ("O mentor foi excluido!");
      return;
    }
    return;
  
}

  
  


getNovo();

