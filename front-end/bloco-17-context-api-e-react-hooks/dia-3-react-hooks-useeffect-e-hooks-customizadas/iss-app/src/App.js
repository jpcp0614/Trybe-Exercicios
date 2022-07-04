import React, { Component } from 'react';
import ISSLocation from './components/ISSLocation';
import IssProvider from './context/IssProvider';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Location of the International Space Station (ISS)</h1>
        <IssProvider>
          <ISSLocation />
        </IssProvider>
      </div>
    );
  }
}

export default App;
