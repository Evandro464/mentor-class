const salvarTurmas = () => {      
    const formulario = document.getElementById("formulario4")

    const mentoria = formulario.elements['mentoria' ].value;
    const mentor = formulario.elements['mentor'].value;
    const data = formulario.elements['data'].value;
    const semana = formulario.elements['semana'].value;
    const horario1 = formulario.elements['horario1'].value;
    const horario2 = formulario.elements['horario2'].value;
    const turmas = formulario.elements['turmas'].value;
    const link = formulario.elements['link'].value;
    const encontros = formulario.elements['encontros'].value;
       

    const turma = {
        mentoria,
        mentor,
        data,
        semana,
        horario1,
        horario2,
        turmas,
        link,
        encontros,
       // status
    }
    console.log("turma" , turma)
    cadastrarTurmas(turma);
}

const cadastrarTurmas = async (turmas) => {
    await fetch ("http://localhost:3000/turmas",{
        method: "POST",
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(turmas)

    })
       
    window.location= "turmas.html"
}

const getMentorias = async () =>{
    const response = await fetch (" http://localhost:3000/mentorias")
    const listaTurmasJson = await response.json();
    renderMentorias(listaTurmasJson);

}
                                                                                                                               
const renderMentorias = (listaM) =>{                                                                                                                                  
    let selectHtmlMentorias = document.getElementById("id-select-mentoria");
    listaM.forEach(a =>{
        selectHtmlMentorias.innerHTML = selectHtmlMentorias.innerHTML+
       ' <option value ="' + a.mentoria +'">'+ a.mentoria + '</option>';
       
       console.log("mentorias", listaM)
    })                                     
}

const getMentor = async () =>{
    const response = await fetch (" http://localhost:3000/mentorias")
    const listaTurmaJson = await response.json();
    renderMentor(listaTurmaJson);

}

const renderMentor =(listaM) =>{
    let selectHtmlMentor = document.getElementById("id-select-mentor");
    listaM.forEach(b => {
        selectHtmlMentor.innerHTML = selectHtmlMentor.innerHTML+
        ' <option value ="' + b.mentor +'">'+ b.mentor + '</option>';
    })
}

const getDiaSemana = async () =>{
    const response = await fetch (" http://localhost:3000/semana")
    const listaTurmaJson = await response.json();
    renderDiaSemana(listaTurmaJson);

}

const renderDiaSemana =(listaM) =>{
    let selectHtmlSemana = document.getElementById("id-select-semana");
    listaM.forEach(b => {
        selectHtmlSemana.innerHTML = selectHtmlSemana.innerHTML+
        ' <option value ="' + b.dia +'">'+ b.dia + '</option>';
    })
}

getMentorias()
getMentor()
getDiaSemana()



