import './App.css';
import GreatGrandmother from "./components/GreatGrandmother";
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <GreatGrandmother />
      </MyProvider>
    </div>
  );
}

export default App;
