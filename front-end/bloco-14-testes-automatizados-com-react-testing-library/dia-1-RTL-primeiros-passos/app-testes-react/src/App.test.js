import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Teste 1 - Verifica se existe um input de email na tela', () => {
  render(<App />) // 1. acessar os elementos na tela
  const inputEmail = screen.getByLabelText("Email:"); // Ele pega a label, com o texto Email e retorna o input dele

  expect(inputEmail).toBeInTheDocument(); // garantir que o email está sendo renderizado na tela
  expect(inputEmail.type).toBe("email"); // é do tipo email
});


test('Teste 2 - Verifica se existem dois botões na tela', () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});


test('Teste 3 - Verifica se existe o botão de enviar', () => {
  render(<App />);
  const button = screen.getByTestId("id-send");

  expect(button).toBeInTheDocument();
  expect(button).toHaveValue("Enviar");
});