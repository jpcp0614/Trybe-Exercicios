const { expect } = require('chai');

const calculateAverage = require('../average');

describe('Teste 1: Quando a média >= 7 e média <= 10', () => {
  it('retorna "aprovado"', () => {
    const result7 = calculateAverage(7);
    const result85 = calculateAverage(8.5)
    const result10 = calculateAverage(10)

    expect(result7).to.be.equals('aprovado');
    expect(result85).to.be.equals('aprovado');
    expect(result10).to.be.equals('aprovado');
  });
});

describe('Teste 2: Quando a média >= 0 e média < 4', () => {
  it('retorna "reprovado direto"', () => {
    const result0 = calculateAverage(0);
    const result2 = calculateAverage(2);
    const result4 = calculateAverage(3.5);

    expect(result0).to.be.equals('reprovado direto');
    expect(result2).to.be.equals('reprovado direto');
    expect(result4).to.be.equals('reprovado direto');
  });
});

describe('Teste 3: Quando a média >= 4 e média < 7', () => {
  it('retorna "em recuperação"', () => {
    const result45 = calculateAverage(4.5);
    const result65 = calculateAverage(6.5);

    expect(result45).to.be.equals('em recuperação');
    expect(result65).to.be.equals('em recuperação');
  });
});

describe('Teste 4: Quando a média < 0 ou média > 10', () => {
  it('retorna "digitar valor da média novamente"', () => {
    const resultNeg = calculateAverage(-1);
    const result11 = calculateAverage(11);

    expect(resultNeg).to.be.equals('digitar valor da média novamente');
    expect(result11).to.be.equals('digitar valor da média novamente');
  });
});
