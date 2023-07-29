
const pesquisar  = async ()=>{
  if(event.key === 'Enter') {
      const inputPesquisa = document.getElementById ("txtBusca");
      let valorPesquisa = inputPesquisa.value;
      let valorPesquisaFinal = '';

      if(valorPesquisa) {
          valorPesquisaFinal ='?q=' + valorPesquisa;
      }
      const respons = await fetch('https://api-mentorclass.onrender.com/mentorias/' + valorPesquisaFinal )
      const listaMentoresJson = await respons.json()
      renderMentorias(listaMentoresJson);
  }

}
const getMentoresPesquisa = async () => {
  const response = await fetch("https://api-mentorclass.onrender.com/mentorias" );
  const listaMentoresJson = await response.json();

  //console.log(listaMentores);
  renderMentorias(listaMentoresJson);


}

const renderMentorias = (listaMentores) =>{
  // criando variavel 
  const tabelaAntiga = document.querySelector("tbody");
  let newTabela = document.createElement('tbody');
  tabelaAntiga.parentNode.replaceChild(newTabela, tabelaAntiga);

  const tabela = document.querySelector("tbody");

  listaMentores.forEach(mentoria => { 
            tabela.innerHTML = tabela.innerHTML + 
            '<tr> ' +
            '<td> ' + mentoria.mentoria + '</td>' +
            '<td> ' +mentoria.mentor + '</td>' + 
            //'<td> '  +mentoria.status + '</td>' + 
            //'<td> ' + (mentoria.status!=null && mentoria.status==true ? "Ativo" : "Inativo") + '</td>' + 
            '<td> ' + (converterStatus( mentoria.status)) +  '</td>' + 
            '<td class="td-button"><a href="#" class = "a-href-editar" onclick="editmentoria('+ mentoria.id+')"><span class="material-symbols-outlined">edit</span></a><a href="#" class = "a-href-delete" onclick="deletar('+ mentoria.id+')"><span class="material-symbols-outlined">delete</span></a></td>'  
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
    const resultado = await fetch('https://api-mentorclass.onrender.com/mentores/' + mentorId);
    const pessoa = await resultado.json();
    return pessoa.nome;
}
*/
const editmentoria=(mentoriaid)=>{
    console.log(mentoriaid)
    window.location="../mentoria/edicaoMentoria.html?id="+mentoriaid
}
//const deletar=(mentorid)=>{
    //console.log(mentorid)
    
//}

const getMentoria = async () => {
    const response = await fetch ("https://api-mentorclass.onrender.com/mentorias")
    const listaMentoriaJson = await response.json()

    renderMentorias(listaMentoriaJson)


}
const deletar = async (id) => {
  if(confirm("Deseja deletar o item?")){
    await fetch('https://api-mentorclass.onrender.com/mentorias/' + id, {
        method:'DELETE'              
    });
    window.location="../mentoria/listaMentorias.html";

    alert ("O mentor foi excluido!");
    return;
  }
  return;
}
getMentoria()
  
  





