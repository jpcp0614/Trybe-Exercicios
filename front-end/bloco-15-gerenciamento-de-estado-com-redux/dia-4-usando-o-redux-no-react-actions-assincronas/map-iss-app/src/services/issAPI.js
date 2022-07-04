const ISS_URL = 'http://api.open-notify.org/iss-now.json';

export const getCurrentIssLocation = async () => {
  const response = await fetch(ISS_URL); // await retorna uma promise
  const responseJson = await response.json(); // tb é uma promise

  return responseJson;
}