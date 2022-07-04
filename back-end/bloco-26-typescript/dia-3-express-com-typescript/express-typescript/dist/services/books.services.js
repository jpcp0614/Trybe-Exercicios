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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const book_model_1 = __importDefault(require("../models/book.model"));
const restify_errors_1 = require("restify-errors");
class BookService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.model.getAll();
            return books;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getById(id);
            return book;
        });
        this.create = (book) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.model.getAll();
            const booksFilter = books.filter(b => b.title === book.title);
            if (booksFilter.length > 0) {
                throw new restify_errors_1.ConflictError('Book already exists');
            }
            const newBook = yield this.model.create(book);
            return newBook;
        });
        this.update = (id, book) => __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError('Book not found');
            }
            yield this.model.update(id, book);
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError('Book not found');
            }
            yield this.model.remove(id);
        });
        this.model = new book_model_1.default(connection_1.default);
    }
}
exports.default = BookService;
