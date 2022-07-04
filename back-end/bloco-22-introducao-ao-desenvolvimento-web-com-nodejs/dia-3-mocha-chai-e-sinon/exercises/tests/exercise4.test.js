const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { writeContent } = require('../exercise5');

const FILE_NAME = './exercise5.txt';
const FILE_CONTENT = 'Exercício 5!! \o/';

describe('Run the function writeContent', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });

  describe('The answer', () => {
    it('is "string"', () => {
      const content = writeContent(FILE_NAME, FILE_CONTENT);

      expect(content).to.be.a('string');
    });

    it('is "ok"', () => {
      const content = writeContent(FILE_NAME, FILE_CONTENT);

      expect(content).to.be.eq('ok');
    });
  });
});