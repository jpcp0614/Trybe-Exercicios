import React, { Component } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { fetchIssLocation } from '../redux/actions';
import { connect } from 'react-redux';

class ISSLocation extends Component {

  // quando o componente montar, chama a função para disparar a a action
  componentDidMount() {
    const { receiveIssLocationAction } = this.props;
    receiveIssLocationAction();

    // como a posição vai mudando com o tempo
    // fiz o timer para chamar a função receiveIssLocationAction a cada 1 seg
    const TWO_SECONDS = 1000;
    this.time = setInterval(() => {
      receiveIssLocationAction();
    }, TWO_SECONDS)
  }

  // limpar
  componentWillMount() {
    clearInterval(this.timer)
  }

  render() {
    const { latitude, longitude, loading } = this.props;
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
        { loading && <span>Loading rápido...</span> }
      </div>
    );
  }
}

// ler o estado
// latitude e longitude é um objeto do issReducer, por isso state.issReducer... 
const mapStateToProps = (state) => ({
  latitude: state.issReducer.latitude,
  longitude: state.issReducer.longitude,
  // apareça a msg Loading...
  // crio a propriedade loading
  loading: state.issReducer.isFetch,
});

// preciso disparar a action fetchIssLocation() - com parentesis, pra retornar função (vai dar um erro)
// por isso, npm install redux-thunk, para usar o middleware no index.js da store
// a receiveIssLocationAction é a função que vai disparar a minha action
const mapDispatchToProps = (dispatch) => ({
  receiveIssLocationAction: () => dispatch(fetchIssLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);

/*
Criei o componente para renderizar o mapa, verificando a documentação dele
https://pigeon-maps.js.org/docs/installation

1)npm install --save pigeon-maps

2)import React from "react"
  import { Map, Marker } from "pigeon-maps"

  export function MyMap() {
    return (
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    )
  }
*/