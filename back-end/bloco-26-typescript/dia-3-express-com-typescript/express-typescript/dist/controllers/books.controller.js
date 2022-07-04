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
const books_services_1 = __importDefault(require("../services/books.services"));
const http_status_codes_1 = require("http-status-codes");
class BookController {
    constructor() {
        this.getAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.service.getAll();
            return res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
        this.getById = (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const book = yield this.service.getById(+id);
            if (!book) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Book not found' });
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json(book);
        });
        this.create = (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = req.body;
            const newBook = yield this.service.create({ title, price, author, isbn });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(newBook);
        });
        this.update = (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, price, author, isbn } = req.body;
            yield this.service.update(+id, { title, price, author, isbn });
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: `Book with id=${id} successfully updated!` });
        });
        this.remove = (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.remove(+id);
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: `Book with id=${id} successfully removed!` });
        });
        this.service = new books_services_1.default();
    }
}
exports.default = BookController;
