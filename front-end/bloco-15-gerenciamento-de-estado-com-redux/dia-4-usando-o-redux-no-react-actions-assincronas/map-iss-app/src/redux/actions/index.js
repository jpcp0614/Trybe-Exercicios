export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';

// 1) action inicial (fixa)
// a action precisa retornar um objeto, por isso temos uma função (action creator)
export const receiveIssLocation = () => ({
  type: RECEIVE_ISS_LOCATION,
  latitude: -22.7938,
  longitude: -43.3204,
});

