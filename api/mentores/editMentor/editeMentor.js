
let idEditar = null


//criando variavel formulario que recebe um elemento por id 
const formulario = document.getElementById('formulario')

const recuperarId = () => {
    const parametros = window.location.search
    const parametroObjeto = new URLSearchParams(parametros)
    const id = parametroObjeto.get('id')

    return id
}

const buscarPessoa = async (id) => {
    const resultado = 
    await fetch('http://localhost:3000/mentores/' + id );
    const pessoa = await resultado.json()

    return pessoa
}

const carregarDadosFormulario = (pessoa) => {
    document.getElementById('id').value = pessoa.id
    document.getElementById('nome').value = pessoa.nome
    document.getElementById('email').value = pessoa.email
}

const editarPessoa = async (id, pessoa) => {
    await fetch('http://localhost:3000/mentores/' + id, {
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
    window.location = 'mentores.html'

}

//chamando função carregarDadosEditar
carregarDadosEditar()