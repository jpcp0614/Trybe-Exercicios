import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const tarefas = ['Ligar o laptop', 'Tomar café', 'Escovar os dentes', 'Trybe'];

class Exercise1 extends Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  };
};

export default Exercise1;