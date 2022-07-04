const { expect } = require('chai');
const sinon = require('sinon');
const readline = require('readline-sync');

const { calcArea } = require('../calcArea');

describe('Run the area calculation script', () => {
  describe('when value is greater than or equal to zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(100);
    });

    after(() => {
      readline.questionInt.restore();
    })

    describe('the answer...', () => {
      it('is a number', () => {
        const area = calcArea();

        expect(area).to.be.a('number');
      });

      it('is 100 when the side is equal to 10', () => {
        const area = calcArea();

        expect(area).to.be.eq(100);
      });
    });
  });

  describe('when value is little than zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(-1);
    });

    after(() => {
      readline.questionInt.restore();
    })

    it('messenger: "Invalid value"', () => {
      expect(calcArea).to.throw('Invalid value');
    });
  });
});