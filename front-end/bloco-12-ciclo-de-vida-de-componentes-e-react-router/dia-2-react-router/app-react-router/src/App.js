import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import { BrowserRouter, Route } from 'react-router-dom'; // desestrutura o import

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/about" component={ About }/> {/* se eu navegar para o path /about, ele vai para o component About */}
        <Route path="/howto" component={ HowTo } />
        <Route path="/profile/:city" render={(props) => <Profile {...props} name="Teseu, o ateniense"/>}/>
        <Route path="/" component={ Home }/> {/* para que não haja uma substring, garantindo que o componente seja renderizado com um path exato */}
      </switch>
    </BrowserRouter>
    
  );
}

export default App;

/*
As props são passadas internamente pelo Route, na callback do render
Para receber todos os arrays, usamos um spread operator
Com isso, teremos:
  - history: browser consegue guardar o historico de navegação, ja que não damos reload na página
  - location: 
  - match: passar parametros pela URL (exemplo: id, nome de usuario)
          isso é passado no path, com barra, dois pontos e no nome da chave, exemplo: path="/profile/:city"
*/