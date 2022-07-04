// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const { expect } = chai;

// chai.use(chaiHttp);

// const app = require('../../..'); //? Não entendi

// const { Book } = require('../../../models');

// describe('Busca todos os livros', () => {
//   describe('1) Quando não existem livros cadastrados', () => {
//     const expectedResult = [];

//     before(() => {
//       sinon.stub(Book, 'findAll').resolves([]);
//     });

//     after(() => {
//       Book.findAll.restore();
//     });

//     it('Retorna o status 200', async () => {
//       const result = await chai.request(app).get('/books');
//       expect(result.status).to.be.equal(200);
//     });
//   });
// });