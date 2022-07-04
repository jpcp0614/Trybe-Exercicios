function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
  return (retornaNumeroAleatorio() % 2) === 0;
}

function somaDoisNumeros() {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}


describe('Aprendendo sobre mocks', () => {
  test('1 - Testa se a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled();
  });


  test('2 - Testa o resultado da função', () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8)
    expect(somaDoisNumeros()).toBe(8);
  });


  test('3 - Testa quantas vezes a função foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalledTimes(2);
  });


  test('4 - Testa se retorna true quando for par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);
    expect(divisivelPorDois()).toBe(true);
  });


  test('5 - Testa se retorna false quando for ímpar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false);
  });
});