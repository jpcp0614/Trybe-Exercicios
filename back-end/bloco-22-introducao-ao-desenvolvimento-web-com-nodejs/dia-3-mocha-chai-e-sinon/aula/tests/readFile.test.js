const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const { readFile1 } = require('../readFile');

const CONTENT_FILE = 'Hello, tests!';

describe('Call the function readFile:', () => {
  describe('1. When the file is read successfully...', () => {
    before(() => {
      sinon.stub(fs, 'readFile').resolves(CONTENT_FILE)
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('the answer', () => {
      it('is a string', async () => {
        const content = await readFile1('./file1.txt');

        expect(content).to.be.a('string');
      });

      it('is equal to the contents of the file', async () => {
        const content = await readFile1('./file1.txt');

        expect(content).to.be.eq(CONTENT_FILE);
      })
    });
  });

  describe('2. When there is an error reading the file...', () => {
    before(() => {
      sinon.stub(fs, 'readFile').resolves(null)
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('the answer', () => {
      it('is null', async () => {
        const content = await readFile1('./file_dont_exist.txt');

        expect(content).to.be.null;
      });
    });
  });
});
