import React, { Component } from 'react';
import { Map, Marker } from 'pigeon-maps';
import IssContext from '../context/IssContext';

class ISSLocation extends Component {

  // por enquanto, acessar a fetchIssLocation via props
  componentDidMount() {
    const { fetchIssLocation } = this.context;
    fetchIssLocation();

    const TWO_SECONDS = 1000;
    this.time = setInterval(() => {
      fetchIssLocation();
    }, TWO_SECONDS)
  }

  // limpar
  componentWillMount() {
    clearInterval(this.time)
  }

  render() {
    const { latitude, longitude } = this.context; // agora temos um contexto dentro da classe
    return(
      <div>
          <Map
            center={[0, 0]}
            defaultWidth={450}
            height={450}
            minZoom={1.5}
            maxZoom={8}
            zoom={1.5}>
            <Marker width={50} anchor={[latitude, longitude]} />
          </Map>
          {/* se loading for true, aparece a msg Loading... */}
          <p>Latitude: { latitude }</p>
          <p>Longitude: { longitude }</p>
        </div>      
    );
  }
}

// Se o componente tivesse mais abaixo na hierarquia, teríamos problema de prop drilling
// vamos acessar o context de modo diferente, dentro do componente ISSLocation
// SOMENTE componentes de classe possuem a propriedade contextType
// essa propriedade vai receber qual o contexto que quero utilizar
ISSLocation.contextType = IssContext;

// isso vai mudar a forma de consumir os dados

export default ISSLocation;
