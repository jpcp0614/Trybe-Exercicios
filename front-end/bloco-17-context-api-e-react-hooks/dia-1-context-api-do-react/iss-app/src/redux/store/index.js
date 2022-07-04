import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'; // importa do index.js
import thunk from 'redux-thunk';

// documentação: https://github.com/zalmoxisus/redux-devtools-extension#installation (1.With Redux -> 1.3 Use redux-devtools-extension)
// na biblioteca redux, tem a função applyMiddleware
// executa ela como parâmetro no composeWithDevTools
// quais os middleware's usamos? Só o thunk....passa ele como parâmetro
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
