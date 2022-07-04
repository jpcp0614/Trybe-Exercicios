import React, { Component } from 'react'

class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { addTodo } = this.props;
    const { newTodo } = this.state;

    addTodo(newTodo);
    this.setState({
      newTodo: '',
    });
  }

  render() {
    const { newTodo } = this.state;
    const { handleChange,  handleClick } = this;
    return (
      <div>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        {/* quando digitamos no input, ele salva no meu estado local */}
        <input
          id="addTodo"
          name="newTodo"
          onChange={ handleChange }
          type="text"
          value={ newTodo }
        />
      </label>
      <button
        // ao clicar no botão, envio o estado para o estado do App
        onClick={ handleClick }
        type="button"
      >
        Adicionar tarefa
      </button>
    </div>
    )
  }
}

export default  TodoInput;