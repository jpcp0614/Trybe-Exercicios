import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from "pigeon-maps"
import { receiveIssLocation } from '../redux/actions'; // index.js
import { getCurrentIssLocation } from '../services/issAPI';

class ISSLocation extends Component {

  // quando o componente montar, chama a função
  async componentDidMount() {
    // verificar se retorna os dados da API (promise)
    const issPosition = await getCurrentIssLocation();
    console.log(issPosition);

    const { receiveIssLocationAction } = this.props;
    receiveIssLocationAction();
  }

  render() {
    const { latitude, longitude } = this.props;
    return(
      <Map
        center={ [0, 0] }
        defaultWidth={ 450 }
        height={ 450 }
        minZoom={ 1.5 }
        maxZoom={ 8 }
        zoom={ 1.5 }
      >
        <Marker width={ 50 } anchor={ [latitude, longitude] } />
      </Map>
    )
  }
}

// ler o estado (mapear o estado)
// latitude e a longitude: é um objeto do issReducer -> state.issReducer
const mapStateToProps = (state) => ({
  latitude: state.issReducer.latitude,
  longitude: state.issReducer.longitude,
});

// precisa disparar a action através da receiveIssLocation() com parentesis (pq? retorna objeto)
// qual objeto? a action em si
const mapDispatchToProps = (dispatch) => ({
  receiveIssLocationAction: () => dispatch(receiveIssLocation()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);