import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
class Content extends Component {
  render() {
    return (
      <div className="content">
        { 
          conteudos.map(item => (
          <div className="div-content" key={item.conteudo}>
            <h3 className="subtitle">{ `O conteúdo é: ${item.conteudo}` }</h3>
            <p>{ `Status: ${item.status}` }</p>
            <p>{ `Bloco: ${item.bloco}` }</p>
          </div>
        )) 
        }
      </div>
    );
  };
};

export default Content;