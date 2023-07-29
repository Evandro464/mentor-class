
let idEditar = null


//criando variavel formulario que recebe um elemento por id 
const formulario = document.getElementById('formulario')

//criando uma funcao recuperarId 
const recuperarId = () => {
    const parametros = window.location.search
    const parametroObjeto = new URLSearchParams(parametros)
    const id = parametroObjeto.get('id')

    return id
}

// criando funcao buscarPessoa (funcao async)
const buscarPessoa = async (id) => {

    //funcao resultado que vai aguardar uma busca na api com o id
    const resultado = 
    await fetch('https://api-mentorclass.onrender.com/alunos/' + id );
    const pessoa = await resultado.json()

    return pessoa
}

const carregarDadosFormulario = (pessoa) => {
    document.getElementById('id').value = pessoa.id
    document.getElementById('nome').value = pessoa.nome
    document.getElementById('email').value = pessoa.email
}

const editarPessoa = async (id, pessoa) => {
    await fetch('https://api-mentorclass.onrender.com/alunos/' + id, {
        method:'PUT',
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(pessoa)
    })
}

const carregarDadosEditar = async () => {
    idEditar = recuperarId()
    if(idEditar != null){
        const pessoa = await buscarPessoa(idEditar)

        carregarDadosFormulario(pessoa)
    }
}

//criando uma variavel do tipo função salvarMentor
const salvarMentor = async () =>{
    //criando variavel id que recebe um elemento dentro do formularirio com o nome id
    const id = formulario.elements['id'].value
    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value

    //criando variavel pessoa (vetor), com duas posiçoes(nome, email)
    const pessoa = {
        nome,
        email        
    }

    //await = serve para forçar o aguardo do termino da execução da função editarPessoa
    //função editarPessoa passa por parametro o id, e o vetor pessoa
    await editarPessoa(id, pessoa)

    //redireciona a pagina para mentores.html
    window.location = '../listaAlunos.html'

}

//chamando função carregarDadosEditar
carregarDadosEditar()