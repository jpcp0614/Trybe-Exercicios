import { getCurrentIssLocation } from '../../services/issAPI';

export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION'; // recebe a localização, exporta pro reducer
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION'; // type da requisição que começa
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS'; // type para retorno com sucesso

// 1) action inicial, com latitude e longitude fixas
// a action precisa retornar um objeto, por isso cria-se uma função (action creator)
export const receiveIssLocation = () => ({
  type: RECEIVE_ISS_LOCATION,
  latitude: -22.7938,
  longitude: -43.3204,
});

/* O componente, quando inicializa, ele faz uma requisição....mas é uma promise, demora pra retornar
  Eu preciso criar uma ação para informar que eu comecei a fazer a requisição
  E uma outra ação que informa que a requisição terminou
  Assim eu consigo exibir um Loading na tela (se eu quiser)
*/

// 2) action que informa que a requisição começou
export const requestIssLocation = () => ({
  // essa ação não precisa de valor
  // é só para informar ao issReducer que tem uma ação de requisição
  type: REQUEST_ISS_LOCATION,
});

// 3) action que informa o retorno da requisição
export const receiveIssLocationSuccess = (latitude, longitude) => ({
  // essa ação precisa de um valor
  // como a latitude e longitudes não podem ser fixas (posição do satélite fica mudando) como no caso da action 1)
  // elas retornam como parametros desta função 
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  latitude: latitude, // ou somente latitude,
  longitude: longitude // ou somente longitude,
});

// 4) action que requisita a atualização da ISS (essa retorna uma função ao invés de objeto, como nas actions 1, 2 e 3)
// o Redux só sabe lidar com objeto...então preciso 'dizer' pra ele o que fazer quando receber uma função
export const fetchIssLocation = () => {
  // ela retorna uma função com dois parâmetros (dispatch, getState)
  // consultar  a biblioteca do redux-thunk
  // https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts (linhas 22 a 31)
  return (dispatch, _getState) => {
    dispatch(requestIssLocation()); // quando a ISS for atualizada, faço o dispatch da action 2, executando-a (preciso do objeto de retorno dela)
    
    // efetivamente, fazer a requisição...executo para obter os dados...é uma promise
    getCurrentIssLocation()
      .then(( { iss_position: { latitude, longitude } } ) => {
        // após a verificação através do console, vi que o location realmente chega até aqui
        // vou disparar a action 3 que finaliza a requisição
        // o parâmetro da action 3 -> olhar no console ({iss_position: { latitude: numero, longitude: numero }})
        // fica feio assim => dispatch(receiveIssLocationSuccess(location.iss_position.latitude, location.iss_position.longitude))
        // desestruturei
        dispatch(receiveIssLocationSuccess(latitude, longitude));
      });

    // em seguida, peço ao componente ISSLocation executar essa action 4
    // através do devtools do navegador, verifiquei que as duas actions estão chegando lá (2 e a 3)
  };
};