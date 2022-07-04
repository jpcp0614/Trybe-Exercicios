"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBook = void 0;
const http_status_codes_1 = require("http-status-codes");
const properties = ['title', 'price', 'author', 'isbn'];
const validateProperties = (book) => {
    for (let i = 0; i < properties.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
};
const validateValues = (book) => {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i++) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
};
const validateBook = (req, res, next) => {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ message: `O campo ${property} é obrigatório.` });
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ message: `O campo ${property} não pode ser nulo ou vazio.` });
    }
    next();
};
exports.validateBook = validateBook;
