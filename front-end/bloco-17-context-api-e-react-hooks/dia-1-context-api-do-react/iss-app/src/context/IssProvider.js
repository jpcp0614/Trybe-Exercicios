import React, { Component } from 'react';
import IssContext from './IssContext';
import { getCurrentIssLocation } from '../services/issAPI';

// consumer recebe uma função como filho (render props)
// como eu quero o valor do meu contexto (que é um objeto) e exibir como string,
// usar o JSON.stringify(value)
// Retira o ShowContext...usado só para ver como os dados são consumidos

class IssProvider extends Component {
  constructor(){
    super();
    this.state = {
      latitude: -43.5550,
      longitude: 21.4158,
      isFetch: false,
    };
    this.fetchIssLocation = this.fetchIssLocation.bind(this);
  }

  // função para lidar com o setState e a response
  handleIssLocationSuccess(response) {
    const { iss_position: { latitude, longitude } } = response;
    this.setState({
      latitude: latitude,
      longitude: longitude,
      isFetch: false,
    });
  }

  // primeiro, a fetch dispara a action(requestIssLocationAction), que vai atualizar o isFetch
  async fetchIssLocation() {
    this.setState({ isFetch: true });
  
    // fazer a requisição efetivamente
    const response = await getCurrentIssLocation(); // uma promise
    this.handleIssLocationSuccess(response); // vai ser chamada para lidar com o response
  };

  render() {
    return(
        <IssContext.Provider value={ {...this.state, fetchIssLocation: this.fetchIssLocation } }>
          {/* preciso deixar o provider(Pai) dinâmico para os filhos, através de uma propriedade */}
          { this.props.children }
        </IssContext.Provider>
    );
  }
}


export default IssProvider;
