import React, { Component } from 'react';
class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // name == estadoFavorito -> [name] = estadoFavorito, etc...
    this.setState({
      [name]: value
    })
  }

  render() {
    const { estadoFavorito, email, nome, idade, vaiComparecer } = this.state
    return (
      <div>
        <h1>Estados e React: ferramenta incrível</h1>
        <form className="form">
          <label>
            Diga qual é o seu Estado favorito!
            <textarea name="estadoFavorito"
              value={ estadoFavorito }
              onChange={ this.handleChange }/>
          </label>

          <label>
            Email:
            <input name="email" type="email"
              value={ email }
              onChange={ this.handleChange }/>
          </label>

          <label>
            Nome:
            <input name="nome" type="text"
              value={ nome }
              onChange={ this.handleChange }/>
          </label>

          <label>
            Idade:
            <input name="idade" type="number"
              value={ idade }
              onChange={ this.handleChange }/>
          </label>

          <label>
            Vai comparecer à conferência?
            <input name="vaiComparecer" type="checkbox"
              value={ vaiComparecer }
              onChange={ this.handleChange }/>
          </label>

          <label>
            <input name="file" type="file"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;