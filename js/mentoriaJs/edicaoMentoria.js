let idEditar = null
// Define uma constante para o formulário
const formulario = document.getElementById('formulario2');

// Função para buscar o ID da pessoa que será editada
const recuperarId = () => {
  const parametros = window.location.search
  const parametrosObjeto = new URLSearchParams(window.location.search);
  const id = parametrosObjeto.get('id')
  return id;
};

// Função para buscar uma pessoa no banco de dados pelo ID
const buscarPessoa = async (id) => {
  const resultado = await fetch(`http://localhost:3000/mentorias/` + id);
  return resultado.json();
};

// Função para preencher os campos do formulário com as informações da pessoa buscada
const carregarDadosFormulario = (pessoa) => {
  formulario.elements['id'].value = pessoa.id;
  formulario.elements['mentoria'].value = pessoa.mentoria;
  formulario.elements['mentor'].value = pessoa.mentor;
  formulario.elements['flexSwitchCheckChecked'].checked = pessoa.status;
};

// Função para atualizar as informações de uma pessoa no banco de dados
const editarPessoa = async (id, pessoa) => {
  await fetch(`http://localhost:3000/mentorias/` + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(pessoa)
  });

  window.location= "../listaMentorias.html"
};

// Função para salvar as informações de uma pessoa no banco de dados
const salvarMentoria = async () => {
  
  const id = document.getElementById('id').value;
  const mentoria = document.getElementById('mentoria').value;
  const mentor = document.getElementById('id-select-mentor').value;
  const status = document.getElementById('flexSwitchCheckChecked').checked;

  const pessoa = { mentoria, mentor, status };

  await editarPessoa(id, pessoa);
  
};

// Função para carregar os dados da pessoa que será editada ao abrir o formulário de edição
const carregarDadosEditar = async () => {
  const idEditar = recuperarId();
  
  if (idEditar) {
    const pessoa = await buscarPessoa(idEditar);
    carregarDadosFormulario(pessoa);
  }
};

const getMentores = async () =>{
  const response = await fetch ("http://localhost:3000/mentores")
  const listaMentoresJson = await response.json();
  renderMentores(listaMentoresJson);

}

const renderMentores = (mentores) =>{
  let selectHtmlMentores = document.getElementById("id-select-mentor");

  if(selectHtmlMentores != null){
    mentores.forEach(mentor =>{
        selectHtmlMentores.innerHTML = selectHtmlMentores.innerHTML+
      ' <option value ="' + mentor.nome +'">'+ mentor.nome + '</option>';
      
      console.log("mentor", mentor)
    })   
  }                                  
}
//Carregar Mentores
getMentores();

// Carrega os dados da pessoa que será editada ao abrir o formulário de edição
carregarDadosEditar();