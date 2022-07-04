const service = require('./Service');

describe('Teste para o exercício 1', () => {
  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {

    service.randomNumber = jest.fn().mockReturnValue(10); // mockar a função
    
    expect(service.randomNumber()).toBe(10); // resultado 10
    expect(service.randomNumber).toHaveBeenCalled(); // se foi chamada
    expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
  });
});


describe('Teste para o exercício 2', () => {
  test('Testa se a função foi chamada e se a nova implementação de divisão foi aplicada uma vez.', () => {
  // consulta: https://jestjs.io/pt-BR/docs/mock-functions#implementa%C3%A7%C3%B5es-de-mock
  // consulta: https://jestjs.io/pt-BR/docs/expect#tohavebeencalledwitharg1-arg2-

    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b); // mockar com implementação de 2 parâmetros, retornando a divisão
    
    expect(service.randomNumber(8, 2)).toBe(4); // resultado 4
    expect(service.randomNumber).toHaveBeenCalled(); // se foi chamada
    expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.randomNumber).toHaveBeenCalledWith(8, 2); // se foi chamada com os argumentos específicos
  });
});


describe('Teste para o exercício 3', () => {
  test('Testa se a função foi chamada e se a nova implementação com 3 parâmetros, retornando a multiplicação.', () => {

    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c); // mockar com implementação de 3 parâmetros, retornando a multiplicação
    
    expect(service.randomNumber(8, 2, 3)).toBe(48); // resultado 48
    expect(service.randomNumber).toHaveBeenCalled(); // se foi chamada
    expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.randomNumber).toHaveBeenCalledWith(8, 2, 3); // se foi chamada com os argumentos específicos
  });

  test('Testa se a implementação foi resetada, criando uma nova com 1 parâmetro, retornando o dobro.', () => {
  // consulta: https://jestjs.io/pt-BR/docs/mock-function-api#mockfnmockreset

    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2); // mockar com implementação de 1 parâmetro, retornando o dobro
    
    expect(service.randomNumber(8)).toBe(16); // resultado 16
    expect(service.randomNumber).toHaveBeenCalled(); // se foi chamada
    expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.randomNumber).toHaveBeenCalledWith(8); // se foi chamada com os argumentos específicos
  });
});


describe('Teste para o exercício 4', () => {
  test('A.1 - Testa a firstFunction com uma nova implementação, retornando a string em caixa baixa e depois restaura a implementação', () => {
    service.firstFunction = jest.fn().mockImplementationOnce((string) => string.toLowerCase()); // mockar com implementação, retornando a string em caixa baixa
    
    expect(service.firstFunction('CASA')).toBe('casa'); // resultado 'casa'
    expect(service.firstFunction).toHaveBeenCalled(); // se foi chamada
    expect(service.firstFunction).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.firstFunction).toHaveBeenCalledWith('CASA'); // se foi chamada com os argumentos específicos

    // service.firstFunction.mockReset(); // restaurar a implementação
    // expect(service.firstFunction('casa')).toBeEqualTo('CASA');
  });

  test('A.2 - Testa a secondFunction com uma nova implementação, retornando a última letra da string', () => {
    service.secondFunction = jest.fn().mockImplementationOnce((string) => string.substr(string.lastIndexOf())); // mockar com implementação, retornando a última letra da string
    
    expect(service.secondFunction('Trybe')).toBe('e'); // resultado 'e'
    expect(service.secondFunction).toHaveBeenCalled(); // se foi chamada
    expect(service.secondFunction).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.secondFunction).toHaveBeenCalledWith('Trybe'); // se foi chamada com os argumentos específicos
  });

  test('A.3 - Testa a thirdFunction com uma nova implementação, retornando a concatenação de 3 strings', () => {
    service.thirdFunction = jest.fn().mockImplementationOnce((a, b, c) => a + b + c); // mockar com implementação, retornando a concatenação de 3 strings
    
    expect(service.thirdFunction('casa', 'verde', 'grande')).toBe('casaverdegrande'); // resultado 'casaverdegrande'
    expect(service.thirdFunction).toHaveBeenCalled(); // se foi chamada
    expect(service.thirdFunction).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    expect(service.thirdFunction).toHaveBeenCalledWith('casa', 'verde', 'grande'); // se foi chamada com os argumentos específicos
  });
});


describe('Teste para o exercício 5', () => {
  service.fetchDog = jest.fn(); // mockar a função
    afterEach(service.fetchDog.mockReset);

  test('1. Testa se a requisição se resolveu e teve como valor "request success".', async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog(); // chamar a função
    expect(service.fetchDog).toHaveBeenCalled(); // se foi chamada
    expect(service.fetchDog).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
    await expect(service.fetchDog()).resolves.toBe('request success'); // espera que se resolva
    expect(service.fetchDog).toHaveBeenCalledTimes(2); // quantas vezes foi chamada
  });

  test('2. Testa se a requisição não se resolveu e teve como valor "request failed".', async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0); // quantas vezes foi chamada
    await expect(service.fetchDog()).rejects.toBe('request failed'); // espera que não se resolva
    expect(service.fetchDog).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
  });
});