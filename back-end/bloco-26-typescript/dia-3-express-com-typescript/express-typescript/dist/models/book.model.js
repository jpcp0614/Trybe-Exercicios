"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const QUERY = 'SELECT * FROM books;';
            const [result] = yield this.connection.execute(QUERY);
            return result;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const QUERY = 'SELECT * FROM books WHERE id=?;';
            const result = yield this.connection.execute(QUERY, [id]);
            // const [rows] = result;
            // console.log('primeira parte:\n', [rows]);
            // const [book] = rows as Book[];
            // console.log('segunda parte:\n', [book]);
            // return book;
            return result[0][0];
        });
        this.create = (book) => __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const QUERY = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?);';
            const [result] = yield this.connection.execute(QUERY, [title, price, author, isbn]);
            return {
                id: result.insertId,
                title,
                price,
                author,
                isbn,
            };
        });
        this.update = (id, book) => __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const QUERY = 'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?;';
            yield this.connection.execute(QUERY, [title, price, author, isbn, id]);
            // return {
            //   id,
            //   title,
            //   price,
            //   author,
            //   isbn,
            // };
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            const QUERY = 'DELETE FROM books WHERE id=?;';
            yield this.connection.execute(QUERY, [id]);
        });
        this.connection = connection;
    }
}
exports.default = BookModel;
