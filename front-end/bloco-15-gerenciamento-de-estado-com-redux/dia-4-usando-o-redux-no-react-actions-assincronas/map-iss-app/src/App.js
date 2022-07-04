import React from "react"
import './App.css';
import ISSLocation from "./components/ISSLocation";

/*
action globais


*/

function App() {
  return (
    <div className="App">
      <h1>Localização da ISS</h1>
      <ISSLocation />
    </div>
  );
}

export default App;
