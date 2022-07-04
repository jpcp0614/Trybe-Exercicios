import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory(); // ter o próprio histórico
  return ({
    ...render(<Router history={ history }>{ component }</Router>), history,
  });
};
export default renderWithRouter;

/*
Router genérico, passando o history que criamos
Assim, toda vez que for chamado, vai criar um history do zero

No return, ele pega tudo que tem dentro do render do rtl (...render)
Além disso, disponibiliza o history que foi criado...assim, teremos acesso a ele

Pega um componente como parâmetro, renderiza o componente dentro do nosso roteador,
pega o retorno disso tudo, junta com o history criado e devolve através do return
*/