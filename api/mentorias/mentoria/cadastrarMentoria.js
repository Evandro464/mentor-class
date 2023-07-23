const formulario = document.getElementById("formulario2")

formulario.addEventListener("submit" ,  (e)=> {
    
    e.preventDefault()
    
    

    const mentoria = formulario.elements['mentoria' ].value;
    const mentor = formulario.elements['mentor'].value;

    const mentorias = {
        mentoria,
        mentor,
    }
    console.log("mentorias" , mentorias)
    cadastrarMentoria(mentorias);
})

const cadastrarMentoria = async (mentorias) => {
    await fetch ("http://localhost:3000/mentorias",{
        method: "POST",
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(mentorias)

    })
       
    window.location= "mentorias.html"
}

const getMentores = async () =>{
    const response = await fetch ("http://localhost:3000/mentores")
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