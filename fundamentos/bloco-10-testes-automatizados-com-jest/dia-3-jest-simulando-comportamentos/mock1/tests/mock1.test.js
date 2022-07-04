const mock1 = require('../src/mock1');

// Test1
// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// Test2
// test("#randomRgbColor", () => {
//   // testando se a função foi chamada e qual seu retorno
//   mock1.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

//   mock1.randomRgbColor();
//   expect(mock1.randomRgbColor).toHaveBeenCalled();
//   expect(mock1.randomRgbColor()).toBe("rgb(255, 255, 255)");
// });

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  mock1.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(mock1.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(mock1.randomRgbColor()).toBe("first call");
  expect(mock1.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(mock1.randomRgbColor()).toBe("second call");
  expect(mock1.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(mock1.randomRgbColor()).toBe("default value");
  expect(mock1.randomRgbColor).toHaveBeenCalledTimes(3);
});