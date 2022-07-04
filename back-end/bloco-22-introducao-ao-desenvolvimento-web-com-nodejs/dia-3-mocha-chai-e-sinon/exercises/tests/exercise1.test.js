const { expect } = require('chai');

const { numberType } = require('../exercise2');

describe('Run the function', () => {
  describe('when the number is greater than zero', () => {
    describe('the answer', () => {
      it('is string', () => {
        const result = numberType(2);

        expect(result).to.be.a('string');
      });

      it('is "positivo"', () => {
        const result = numberType(2);

        expect(result).to.be.eq('positivo');
      });

      describe('when the number is less than zero', () => {
        describe('the answer', () => {
          it('is string', () => {
            const result = numberType(-2);
    
            expect(result).to.be.a('string');
          });
    
          it('is "negativo"', () => {
            const result = numberType(-2);
    
            expect(result).to.be.eq('negativo');
          });
        });
      });

      describe('when the number is equal to zero', () => {
        describe('the answer', () => {
          it('is string', () => {
            const result = numberType(0);
    
            expect(result).to.be.a('string');
          });
    
          it('is "neutro"', () => {
            const result = numberType(0);
    
            expect(result).to.be.eq('neutro');
          });
        });
      });

      describe('when value is different of number', () => {
        describe('the answer', () => {
          it('is string', () => {
            const result = numberType('aaaa');
    
            expect(result).to.be.a('string');
          });
    
          it('is equal "o valor deve ser um número"', () => {
            const result = numberType('aaaa');
    
            expect(result).to.be.eq('o valor deve ser um número');
          });
        });
      });
    });
  });
});