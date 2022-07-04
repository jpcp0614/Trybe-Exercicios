const ISS_URL = 'http://api.open-notify.org/iss-now.json';

export const getCurrentIssLocation = async () => {
  const response = await fetch(ISS_URL); // await retorna uma promise, que tá no response
  const responseJson = await response.json(); // vai transformar a resposta em json (tb é uma promise, por isso o await)

  return responseJson;

}