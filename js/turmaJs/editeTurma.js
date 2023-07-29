let idEditar = null
// Define uma constante para o formulário
const formulario = document.getElementById('formulario4');

// Função para buscar o ID da pessoa que será editada
const recuperarId = () => {
  const parametros = window.location.search
  const parametrosObjeto = new URLSearchParams(window.location.search);
  const id = parametrosObjeto.get('id')
  return id;
};

// Função para buscar uma pessoa no banco de dados pelo ID
const buscarPessoa = async (id) => {
  const resultado = await fetch(`https://api-mentorclass.onrender.com/turmas/` + id);
  return resultado.json();
};

// Função para preencher os campos do formulário com as informações da pessoa buscada
const carregarDadosFormulario = (pessoa) => {
  formulario.elements['id'].value = pessoa.id;
  formulario.elements['mentoria'].value = pessoa.mentoria;
  formulario.elements['mentor'].value = pessoa.mentor;
  formulario.elements['semana'].value = pessoa.semana;
  formulario.elements['link'].value = pessoa.link;
  formulario.elements['turma'].value = pessoa.turmas;
  formulario.elements['link'].value = pessoa.link;
  formulario.elements['encontros'].value = pessoa.encontros;
  formulario.elements['horario1'].value = pessoa.horario1
  formulario.elements['encontros'].value = pessoa.encontros;
  formulario.elements['horario2'].value = pessoa.horario2;
  formulario.elements['data'].value = pessoa.data;



  
  
};

// Função para atualizar as informações de uma pessoa no banco de dados
const editarPessoa = async (id, pessoa) => {
  await fetch(`https://api-mentorclass.onrender.com/turmas/` + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(pessoa)
  });

  window.location= "turmas.html"
};

// Função para salvar as informações de uma pessoa no banco de dados
const salvarTurmas = async () => {
  
  const id = document.getElementById('id').value;
  const mentoria = document.getElementById('id-select-mentoria').value;
  const mentor = document.getElementById('id-select-mentor').value;
  const data = document.getElementById('data').value;
  const semana = document.getElementById('id-select-semana').value;
  const horario1 = document.getElementById('horario-inicio').value;
  const horario2 = document.getElementById('horario-fim').value;
  const link = document.getElementById('link').value;
  const turmas = document.getElementById('turma').value;
  const encontros = document.getElementById('qtd-encontros').value;


  const pessoa = { mentoria, mentor, data, semana, horario1,turmas ,link , encontros, horario2};

  await editarPessoa(id, pessoa);

  console.log("turmas")
  
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
  const response = await fetch ("https://api-mentorclass.onrender.com/mentores")
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

const getMentorias = async () =>{
  const response = await fetch (" https://api-mentorclass.onrender.com/mentorias")
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

const getDiaSemana = async () =>{
  const response = await fetch (" https://api-mentorclass.onrender.com/turmas")
  const listaTurmaJson = await response.json();
  renderDiaSemana(listaTurmaJson);

}

const renderDiaSemana =(listaM) =>{
  let selectHtmlSemana = document.getElementById("id-select-semana");
  listaM.forEach(b => {
      selectHtmlSemana.innerHTML = selectHtmlSemana.innerHTML+
      ' <option value ="' + b.semana +'">'+ b.semana + '</option>';

      console.log("semana", listaM)
  })
}

const getTurmas = async () =>{
  const response = await fetch ("https://api-mentorclass.onrender.com/turmas")
  const listaTurmasJson = await response.json();
  renderTurmas(listaTurmasJson);

}

const renderTurmas = (turma) =>{
  let selectHtmlTurmas = document.getElementById("turma");

  if(selectHtmlTurmas != null){
    turma.forEach(turma=>{
        selectHtmlTurmas.innerHTML = selectHtmlTurmas.innerHTML+
      ' <option value ="' + turma.turma +'">'+ turma.turma + '</option>';
      
      console.log("turma", turma)
    })   
  }                                  
}




        
                                     
  

//Carregar Mentores
getMentores();
getMentorias();
getDiaSemana();
getTurmas()


// Carrega os dados da pessoa que será editada ao abrir o formulário de edição
carregarDadosEditar();