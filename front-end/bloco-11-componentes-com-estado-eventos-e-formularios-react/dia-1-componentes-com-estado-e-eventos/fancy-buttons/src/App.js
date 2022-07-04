import React, { Component } from 'react'
import './App.css';


class App extends Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this) //* escreve isso para a funcao enxergar o this
    this.state ={ //* objeto
      numeroDeCliques: 0
    }
  }

  handleClick() { //* funcao que atualiza o estado (atualiza de forma assincrona)
    this.setState((estadoAnterior, _props) => ({ //* underline significa que o parametro não será usado na funcao
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log('Clicooooou!!!!');
  }


  render() {
    console.log(this)
    // return <button onClick={this.handleClick}>Meu botão {this.state.numeroDeCliques}</button>
    return <button onClick={() => {this.handleClick()}}>Meu botão {this.state.numeroDeCliques}</button>
  }
}

export default App;

//* this: explicito: usar a funcao que está dentro do objeto da minha classe

//* constructor: é uma funcao interna que podemos reescrever
//*              antes de renderizar, o react executa o constructor internamente
