const salvarAlunos = () => {      
    const formulario = document.getElementById("formulario5")

    const nome = formulario.elements['nome' ].value;
    const email = formulario.elements['email'].value;    

    const alunos = {
        nome,
        email,
       // status
    }
    console.log("alunos" , alunos)
    cadastrarAluno(alunos);
}

const cadastrarAluno = async (alunos) => {
    await fetch ("http://localhost:3000/alunos",{
        method: "POST",
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(alunos)

    })
       
    window.location= "../../html/Alunos/listaAlunos.html"
}

