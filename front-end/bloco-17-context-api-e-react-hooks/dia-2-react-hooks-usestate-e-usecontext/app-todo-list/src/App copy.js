import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(newTodo),
    }))
  }

  render() {
    const { addTodo } = this;
    const { todos } = this.state;
    return (
      <main>
        <TodoInput addTodo={ addTodo } />
        <TodoList todos={ todos } />
      </main>
    )
  }
}

export default  App;
