import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <div>
      {/* vou passar cada variável que eu queira disponibilizar para outros componentes */}
      <TodoContext.Provider value={ { todos, addTodo } }>
        { children }
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;