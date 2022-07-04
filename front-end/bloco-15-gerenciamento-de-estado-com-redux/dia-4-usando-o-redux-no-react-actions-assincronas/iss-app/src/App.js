import ISSLocation from './components/ISSLocation';
//import { Provider } from 'react-redux';
//import store from './redux/store'; // importando do index.js

function App() {
  return (
    <div className="App">
      {/* inicialmente, só coloquei um título para o mapa */ }
      <h1>Location of the International Space Station (ISS)</h1>
        <ISSLocation />
    </div>
  );
}

export default App;
