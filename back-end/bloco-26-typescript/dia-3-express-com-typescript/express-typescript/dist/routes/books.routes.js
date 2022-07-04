"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const validation_middleware_1 = require("../middlewares/validation.middleware");
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books', validation_middleware_1.validateBook, booksController.create);
router.put('/books/:id', validation_middleware_1.validateBook, booksController.update);
router.delete('/books/:id', booksController.remove);
exports.default = router;
