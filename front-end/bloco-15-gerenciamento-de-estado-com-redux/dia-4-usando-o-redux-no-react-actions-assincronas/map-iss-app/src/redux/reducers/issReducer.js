import { RECEIVE_ISS_LOCATION } from "../actions";

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
};

const issReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_ISS_LOCATION: // se a action for desse tipo, construo um novo objeto
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      }
    default:
      return state;
  }
}

export default issReducer;