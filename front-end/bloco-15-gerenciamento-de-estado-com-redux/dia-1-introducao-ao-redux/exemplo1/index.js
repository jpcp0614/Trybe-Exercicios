// importar o Redux
const Redux = require('redux');

// criar uma store para acessá-la
//const store = Redux.createStore();

// montar o reducer, retornando o próprio estado, com um valor inicial
const fazerLogin = email => ({
  type: 'LOGIN',
  email
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'LOG':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
    }
  };

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin("alguem@email.com"));

// verificar o output com a função getState
console.log(store.getState());