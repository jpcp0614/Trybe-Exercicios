import React, { useEffect, useState } from 'react';
// import './App.css';

function App() {
  const [limit, setLimit] = useState(10);
  const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=` + limit;
  const [pokemons, setPokemons] = useState([]);

  /*
  componentDidMount
  recebe como parâmetro uma callback
  depois de conferir pelo console que, o que me interessa é o que está dentro de results, vou desestruturar results

  useEffect( callback, [dentro do array é a condição para executar])
  */

  // useEffect(async () => {
  //   const { results } = await fetch(URL_API);
  //   const response = await results.json();
  //   setPokemons(response);
  // }, [limit]);

  // estrutura que o ESLint permite
  useEffect(() => {
    async function fetchData() {
      const pokeApi = await fetch(URL_API)
      const { results } = await pokeApi.json();
      setPokemons(results);

      return () => {}
    }
    fetchData();
  }, [URL_API]); // componentDidUpdate

  function handleMorePokemons() {
    setLimit(limit + 10);
  }

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <button
        type="button"
        onClick={handleMorePokemons}
      >
        +
      </button>
      <ul>
        {
          pokemons.map(item => <li key={item.name}>{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
