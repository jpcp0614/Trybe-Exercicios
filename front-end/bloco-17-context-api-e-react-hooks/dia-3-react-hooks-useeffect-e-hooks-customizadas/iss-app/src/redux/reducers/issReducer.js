import {
  RECEIVE_ISS_LOCATION,
  REQUEST_ISS_LOCATION,
  RECEIVE_ISS_LOCATION_SUCCESS
} from '../actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  isFetch: false,
};

const issReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_ISS_LOCATION: // se a ação for desse tipo, construo um novo objeto
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      }
    // fazer o reducer 'ouvir' a action 2
    // não tem valor, só type, então criei um valor inicial (isFetch)
    case REQUEST_ISS_LOCATION:
      return {
        ...state,
        isFetch: true,
      }
    // fazer o reducer 'ouvir' a action 3
    case RECEIVE_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFetch: false, // false pq a requisição acabou
      }
    default:
      return state;
  }
};

export default issReducer;