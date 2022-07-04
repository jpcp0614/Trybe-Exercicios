// import { useState, useEffect } from 'react';

// function useAbility() {
//   const [pokeUrl, setPokeUrl] = useState('');

//   useEffect(() => {
//     if(pokeUrl !== '') {
//       async function fetchData() { 
//         const pokeAbility = await fetch(URL_API)
//         const { results } = await pokeAbility.json();
//         setsetPokeUrl(results);
  
//         return () => {}
//       }
//       fetchData();
//     }
//   }, [URL_API]);

//   return [];
// }

// export default useAbility;