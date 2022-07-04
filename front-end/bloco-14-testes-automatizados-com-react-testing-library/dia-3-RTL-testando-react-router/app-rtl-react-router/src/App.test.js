import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('Teste da aplicação toda', () => {
  test('Deve renderizar o componente App', () => {
    // render(<App />);
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });
    expect(homeTitle).toBeInTheDocument();
  });
});

// BrowserRouter salva o history, então, se tiver mais de um teste...o anterior influencia o teste seguinte
// Por isso colocamos a função renderWithRouter (é uma forma de trabalhar o rtl com o react-router, juntos)