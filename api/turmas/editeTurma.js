
let idEditar = null


//criando variavel formulario que recebe um elemento por id 
const formulario = document.getElementById('formulario4')

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
    await fetch(' http://localhost:3000/turmas' + id );
    const pessoa = await resultado.json()

    return pessoa
}

const carregarDadosFormulario = (pessoa) => {
    document.getElementById('id').value = pessoa.id
    document.getElementById('mentoria').value = pessoa.id-select-mentoria
    document.getElementById('mentor').value = pessoa.id-select-mentor
    document.getElementById('data').value = pessoa.data
    document.getElementById('semana').value = pessoa.id-select-semana
    document.getElementById('horario1').value = pessoa.horario-inicio
    document.getElementById('horario2').value = pessoa.horario-fim
    document.getElementById('encontros').value = pessoa.encontros
    document.getElementById('turmas').value = pessoa.turmas
    document.getElementById('link').value = pessoa.link 

}

const editarPessoa = async (id, pessoa) => {
    await fetch(' http://localhost:3000/turmas' + id, {
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
const salvarTurma = async () =>{
    //criando variavel id que recebe um elemento dentro do formularirio com o nome id
   // const id = formulario.elements['id'].value
    const mentoria = formulario.elements['mentoria'].value
    const mentor = formulario.elements['mentor'].value
    const data = formulario.elements['data'].value
    const semana = formulario.elements['semana'].value
    const horario1 = formulario.elements['horario1'].value
    const horario2 = formulario.elements['horario2'].value
    const encontros = formulario.elements['encontros'].value
    const link = formulario.elements['link'].value
    const turmas = formulario.elements['turmas'].value

    //criando variavel pessoa (vetor), com duas posiçoes(nome, email)
    const pessoa = {
        mentoria,
        mentor,
        data,
        semana,
        horario1,
        horario2,
        encontros,
        link,
        turmas,       
    }

    //await = serve para forçar o aguardo do termino da execução da função editarPessoa
    //função editarPessoa passa por parametro o id, e o vetor pessoa
    await editarPessoa(id, pessoa)

    //redireciona a pagina para mentores.html
    window.location = 'turmas.html'

}

//chamando função carregarDadosEditar
carregarDadosEditar()

