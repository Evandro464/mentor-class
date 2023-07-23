const renderMentorias = (mentoria)=>{
    // criando variavel 
    const tabela = document.querySelector("tbody");

    //listaMentorias.forEach(mentoria => {    
        mentoria.forEach(mentoria =>{
            tabela.innerHTML = tabela.innerHTML + 
            '<tr> ' +
            '<td> ' + mentoria.mentoria + '</td>' +
            '<td> ' + mentoria.mentor + '</td>' + 
            '<td> ' + mentoria.status + '</td>' +  
            '<td class="td-action"> <button type ="button" onclick="editmentor('+ mentoria.id+')" >editar</button ><button type ="button" onclick="deletar('+ mentoria.id+')" >Deletar</button ></td>'  
        '</tr>';
        //console.log("mentoria",mentoria)
    
        });
   
}
const editmentoria=(mentoriaid)=>{
    console.log(mentoriaid)
    window.location="../mentores/editMentor/editMentor.html?id="+mentoriaid
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
    await fetch('http://localhost:3000/mentorias/' + id, {
        method:'DELETE'              
    });
    window.location="btn-nova-mentoria";

      alert ("o mentor sera excluido")
    return;
}
getMentoria()
  
  





