// function state
function stateOptions() {
  let states = document.getElementById('input-state');
  let arrayOfStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 
                      'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 
                      'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
                      'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 
                      'São Paulo', 'Sergipe', 'Tocantins'];

  for (let i = 0; i < arrayOfStates.length; i += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = arrayOfStates[i];
    states.appendChild(createOptions).value = arrayOfStates[i];
  }
}

// validate Data maxlength and required
function validateData() {
  let nameName = document.querySelector('[name=the-name]');
  let nameEmail = document.querySelector('[name=email]');
  let nameCpf = document.querySelector('[name=cpf]');
  let nameAddress = document.querySelector('[name=address]');
  let nameCity = document.querySelector('[name=city]');
  let nameState = document.querySelector('[name=state]');
  let nameAbstract = document.querySelector('[name=abstract]');
  let nameOffice = document.querySelector('[name=office]');
  let nameOfficeDescription = document.querySelector('[name=office-description]');

  if (nameName.value.length > 40 || nameName.value.length === 0) {
    alert('O campo Nome está inválido');
  }

  if (nameEmail.value.length > 50 || nameEmail.value.length === 0) {
    alert('O campo Email está inválido');
  }

  if (nameCpf.value.length > 11 || nameCpf.value.length === 0) {
    alert('O campo CPF está inválido');
  }

  if (nameAddress.value.length > 50 || nameAddress.value.length === 0) {
    alert('O campo Endereço está inválido');
  }

  if (nameCity.value.length > 200 || nameCity.value.length === 0) {
    alert('O campo Cidade está inválido');
  }

  // I used the reference below to resolve the condition nameState
  // ref.: https://www.guj.com.br/t/verificando-se-foi-selecionado-em-um-select-com-javascript-resolvido/300432
  if (nameState.options[nameState.selectedIndex].value == '') {
    alert('O campo Estado está inválido');
  }

  // I used the reference below to resolve the condition input-house/apartment
  // ref.: https://pt.stackoverflow.com/questions/176951/checar-se-radio-button-est%C3%A1-selecionado
  if (!(document.getElementById('input-house').checked || 
        document.getElementById('input-apartment').checked)) {
    alert('Opção Casa/Apartamento não foi selecionada');
  };

  if (nameAbstract.value.length > 1000 || nameAbstract.value.length === 0) {
    alert('O campo Resumo do Currículo está inválido');
  }

  if (nameOffice.value.length > 40 || nameOffice.value.length === 0) {
    alert('O campo Cargo está inválido');
  }

  if (nameOfficeDescription.value.length > 500 || nameOfficeDescription.value.length === 0) {
    alert('O campo Descrição do Cargo está inválido');
  }
}


function handleSubmit(event) {
  event.preventDefault();
  
  validateData();
}

window.onload = function() {
  stateOptions();

  let buttonSend = document.querySelector('#button-send');
  buttonSend.addEventListener('click', handleSubmit);
}






// button send
// let sendButton = document.querySelector('#button-send');
// sendButton.addEventListener('click', () => { //callback function (será chamada novamente pelo addEventListener)
//   let date = document.querySelector('#input-date').value;

//   let day = parseInt(date.substring(0, 2)) || '';
//   let month = parseInt(date.substring(3, 5)) || '';
//   let year = parseInt(date.substring(6, 10)) || '';

//   if (typeof(day) !== 'number' || typeof(month) !== 'number' || typeof(year) !== 'number') {
//     alert('a data deve conter somente números');
//   }

//   if (day < 0 || day > 31) {
//     alert('dia inconsistente');
//   }

//   if (month < 0 || month > 12) {
//     alert('mês inconsistente');
//   }

//   if (year < 0) {
//     alert('ano inconsistente');
//   }
// });
