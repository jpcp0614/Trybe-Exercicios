import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste para a função de mostrar as piadas na tela', () => {
  test('Verifica se a piada é mostrada na tela', async () => {
    global.fetch = (_url) => { // dentro do meu teste, onde tiver fetch, vou querer que chame a função () => {}
      return Promise.resolve({ // a função jokeFunction retorna uma promise, com um objeto json
        json: () => Promise.resolve({ // a função json retorna uma promise, com um formato específico
          id: '7h3oGtr0fxc',
          joke: 'Whiteboards ... are remarkable.',
          status: 200,
        }) 
      }) 
    }

    // Teste usando jest
    // jest.fn().mockReturnValue({
    //   json: jest.fn().mockReturnValue({
    //     id: '7h3oGtr0fxc',
    //       joke: 'Whiteboards ... are remarkable.',
    //       status: 200,
    //   })
    // })

    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
  });

})

// Outras formas de teste
/*
1)

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

2)
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
*/