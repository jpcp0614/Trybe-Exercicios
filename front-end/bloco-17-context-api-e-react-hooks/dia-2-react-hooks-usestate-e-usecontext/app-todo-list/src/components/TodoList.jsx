import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';

// class TodoList extends Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <div>
//         <ul>
//           {/* recebo via props os todos do App, para renderizar na tela em forma de lista */}
//           {todos.map((todo) => (
//             <li
//               key={ todo }
//             >
//               { todo }
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

//para receber props via um componente funcional, recebemos por parâmetro
// podemos desestruturar para pegarmos o que queremos
function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={ `${todo}__${index}` }>{ todo }</li>
      ))}
    </ul>
  );
}

export default TodoList;