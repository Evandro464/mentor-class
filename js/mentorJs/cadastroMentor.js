const formulario = document.getElementById("formulario1")

formulario.addEventListener("submit" ,  (e)=> {
    
    e.preventDefault()  
    const nome = formulario.elements['nome'].value;
    const email = formulario.elements['email'].value;

    const mentores = {
        nome,
        email,
    }
    console.log("mentores" , mentores)
    cadastrarMentores(mentores);
})

const cadastrarMentores = async (mentores) => {
    await fetch ("https://api-mentorclass.onrender.com/mentores",{
        method: "POST",
        headers: {
            "Accept" : "application/json, text/plain, */*" ,
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(mentores)

    })
       
    window.location= '../listaMentores.html'
}