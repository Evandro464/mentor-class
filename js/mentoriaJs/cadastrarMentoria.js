const salvarMentoria = () => {      
    const formulario = document.getElementById("formulario2")

    const mentoria = formulario.elements['mentoria' ].value;
    const mentor = formulario.elements['mentor'].value;    

    const mentorias = {
        mentoria,
        mentor,
       // status
    }
    console.log("mentorias" , mentorias)
    cadastrarMentoria(mentorias);
}

const cadastrarMentoria = async (mentorias) => {
    await fetch ("https://api-mentorclass.onrender.com/mentorias",{
        method: "POST",
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(mentorias)

    })
       
    window.location= "../listaMentorias.html"
}

const getMentores = async () =>{
    const response = await fetch ("https://api-mentorclass.onrender.com/mentores")
    const listaMentoresJson = await response.json();
    renderMentores(listaMentoresJson);

}

const renderMentores = (mentores) =>{
    let selectHtmlMentores = document.getElementById("id-select-mentor");
    mentores.forEach(mentor =>{
        selectHtmlMentores.innerHTML = selectHtmlMentores.innerHTML+
       ' <option value ="' + mentor.nome +'">'+ mentor.nome + '</option>';
       
       console.log("mentor", mentor)
    })                                     
}
getMentores();