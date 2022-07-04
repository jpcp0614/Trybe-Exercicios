import { combineReducers } from 'redux';
import issReducer from './issReducer';

const rootReducer = combineReducers({ issReducer }); // propriedade

export default rootReducer;