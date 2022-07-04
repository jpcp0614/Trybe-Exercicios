import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import NotFound from '../pages/NotFound';
import Solution from '../pages/Solution';

const arrayOfSolutions = [
  {
    slug: 'hello-world-no-react',
    name: 'Hello World no React',
  },
  {
    slug: 'componentes-react',
    name: 'Componentes React',
  },
  {
    slug: 'componentes-com-estado',
    name: 'Componentes com Estado',
  },
  {
    slug: 'eventos-e-formularios',
    name: 'Eventos e Formulários',
  }
];

class Content extends Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } /> {/* definicao de componente */}

          <Route path="/calendar"> {/* definicao de children - podemos passar qualquer prop */}
            <Calendar />
          </Route>

          <Route
            path="/live-lectures"
            render={ (propRouter) => <LiveLectures {...propRouter} qualquerProp={ true } /> } />
          {/* com o render -> recebe uma funcao...coloco as minhas props e recebo props do router
              com o spread (...), pego todas as props
              qualquerProp é um exemplo somente */}

          <Route path="/trybe-talks" component={ TrybeTalks } />

          <Route
            exact // colocar para não aparecer no Route de Solution
            path="/solutions"
            render={ () => (<Solutions solutions={ arrayOfSolutions }/>) }
          />

          <Route path="/solutions/:slug" component={ Solution } />

          <Route exact path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
