import React, { useState } from 'react'

// class TodoInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       newTodo: '',
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange({ target }) {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleClick() {
//     const { addTodo } = this.props;
//     const { newTodo } = this.state;

//     addTodo(newTodo);
//     this.setState({
//       newTodo: '',
//     });
//   }

//   render() {
//     const { newTodo } = this.state;
//     const { handleChange,  handleClick } = this;
//     return (
//       <div>
//         <label htmlFor="addTodo">
//           Insira uma tarefa:
//           {/* quando digitamos no input, ele salva no meu estado local */}
//           <input
//             id="addTodo"
//             name="newTodo"
//             onChange={ handleChange }
//             type="text"
//             value={ newTodo }
//           />
//         </label>
//         <button
//           // ao clicar no botão, envio o estado para o estado do App
//           onClick={ handleClick }
//           type="button"
//         >
//           Adicionar tarefa
//         </button>
//       </div>
//     )
//   }
// }

// export default  TodoInput;

function TodoInput({ addTodo }) {
  // vamos criar 2 variáveis que serão desestruturadas do useState
  // a função useState retorna um array
  // primeira posição(variável) é a leitura do state
  // segunda posição, é p setNewTodo (papel do setState na variável da primeira posição)
  // o parâmetro do useState é o default, string vazia

  const [newTodo, setNewTodo] = useState('');

  //o target é o vento
  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  // receber a 'props' via parâmetro na TodoInput
  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

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
  );
}

export default TodoInput;