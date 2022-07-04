import { createContext } from 'react'; // primeira coisa é importar a função createContext

/*
Podemos usar um valor default
const contextValueDefault = {
  latitude: -43.5550,
  longitude: 21.4158,
  isFetch: false,
}
*/

const IssContext = createContext();
// objeto com propriedades
// provider -> prover os dados
// consumer -> consumir os dados

// eu quero que toda a aplicação consiga consumir/acessar os dados do meu Context
// assim, o Provider vai prover tais dados, através do value

export default IssContext;