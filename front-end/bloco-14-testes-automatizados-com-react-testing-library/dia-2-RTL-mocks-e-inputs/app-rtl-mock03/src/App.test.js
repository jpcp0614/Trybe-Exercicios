import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste que interage com os inputs', () => {
  test('Verifica se, quando alterar o valor do input Nome, o valor será guardado', () => {
    render(<App />);
    
    const inputNome = screen.getByRole('textbox', { name: /nome/i});
    expect(inputNome).toBeInTheDocument();
    expect(inputNome).toHaveValue('');
    userEvent.type(inputNome, 'João Paulo');
    expect(inputNome).toHaveValue('João Paulo');
  });

  test('Verifica se, quando alterar o valor do input Email, o valor será guardado', () => {
    render(<App />);
    
  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
  });

})
