import React, { Component } from 'react';
import sound from '../assets/bip.mp3';

const ONE_SECOND = 1000;
const TIME_LIMIT = 5;

class Timer extends Component {
  constructor() {
    super();

    this.state ={
      seconds: 0,
      phrases: ['🫁 Inspire...', '😐 Segure...', '😤 Expire...'], // frases
      currentIndexPhrase: 0,
    }
  }

  componentDidMount() { // vai ser chamado depois do componente ser montado e renderizado
    const audio = new Audio(sound); // new pq é uma classe
    
    this.intervalId = setInterval(() => { // api do navegador (colocar o Id do intervalo, usando tb um this, para que o setInterval fique disponivel em toda classe)

      audio.play(); // executar o audio

      this.setState((previousState) => ({ // pega o estado antes de atualizar
        seconds: previousState.seconds + 1, // aqui ele atualiza o estado do seconds
      }))
    }, ONE_SECOND)
  }

  componentDidUpdate(_previousProps, previousState) { // apos a atualizacao, ele vai zerar a contagem do timer (roda todas as vezes que o componente for atualizado)
    // const { seconds } = this.state;
    if (previousState.seconds === TIME_LIMIT) { // usando o previousState no lugar de seconds
      this.setState({
        seconds: 0,
        currentIndexPhrase: (previousState.currentIndexPhrase === 2) ? 0 : previousState.currentIndexPhrase + 1,
        // atualizar as frases de acordo com o current, zerando quando o index do array for 2
      });
    }
  }

  componentWillUnmount() { // limpar o setInterval do navegador (antes de desmontar o componente)
    clearInterval(this.intervalId); // recebe um id (intervalId) -> this.intervalId
  }

  render() {
    const { seconds, phrases, currentIndexPhrase } = this.state;
    return (
      <section>
        <h1>{ phrases[currentIndexPhrase] }</h1>
        <h2>{ seconds }</h2> {/* seconds vindo do estado */}
      </section>
    );
  }
}

export default Timer;