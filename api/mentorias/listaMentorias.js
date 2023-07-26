const renderMentorias = (mentoria)=>{
    // criando variavel 
    const tabela = document.querySelector("tbody");

    //listaMentorias.forEach(mentoria => {    
         mentoria.forEach  (mentoria =>  {
            tabela.innerHTML = tabela.innerHTML + 
            '<tr> ' +
            '<td> ' + mentoria.mentoria + '</td>' +
            '<td> ' +mentoria.mentor + '</td>' + 
            //'<td> '  +mentoria.status + '</td>' + 
            //'<td> ' + (mentoria.status!=null && mentoria.status==true ? "Ativo" : "Inativo") + '</td>' + 
            '<td> ' + (converterStatus( mentoria.status)) +  '</td>' + 
            '<td class="td-action"> <button type ="button" onclick="editmentoria('+ mentoria.id+')" >editar</button ><button type ="button" onclick="deletar('+ mentoria.id+')" >Deletar</button ></td>'  
        '</tr>';
        //console.log("mentoria",mentoria)
    
        });   
}

const converterStatus = (statusBoleano) => {
      //['ativo', 'false'].includes(status) ? status === true : inativo
      //mentoria.status!=null && mentoria.status==true ? "Ativo" : "Inativo
      var statusString = "";
      if (statusBoleano != null && statusBoleano==true){
        statusString = "Ativo";
      }else{
        statusString = "Inativo";
      }

      return statusString;

}
/*
 const obterMentor = async (mentorId)=>{
    const resultado = await fetch('http://localhost:3000/mentores/' + mentorId);
    const pessoa = await resultado.json();
    return pessoa.nome;
}
*/
const editmentoria=(mentoriaid)=>{
    console.log(mentoriaid)
    window.location="../mentorias/cadastroEdicaoMentoria/edicaoMentoria.html?id="+mentoriaid
}
//const deletar=(mentorid)=>{
    //console.log(mentorid)
    
//}

const getMentoria = async () => {
    const response = await fetch ("http://localhost:3000/mentorias")
    const listaMentoriaJson = await response.json()

    renderMentorias(listaMentoriaJson)


}
const deletar = async (id) => {
  if(confirm("Deseja deletar o item?")){
    await fetch('http://localhost:3000/mentorias/' + id, {
        method:'DELETE'              
    });
    window.location="../mentorias/listaMentorias.html";

    alert ("O mentor foi excluido!");
    return;
  }
  return;
}
getMentoria()
  
  





