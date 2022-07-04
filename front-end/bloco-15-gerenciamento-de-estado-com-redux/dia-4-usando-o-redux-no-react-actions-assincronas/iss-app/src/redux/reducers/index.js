import { combineReducers} from 'redux';
import issReducer from './issReducer';

const rootReducer = combineReducers({ issReducer }); // propriedade issReducer

export default rootReducer;
