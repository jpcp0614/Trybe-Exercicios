"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareError = void 0;
const http_status_codes_1 = require("http-status-codes");
const MiddlewareError = (error, _req, res, next) => {
    const { name, message, details } = error;
    console.log(`name: ${name}`);
    switch (name) {
        case 'ValidationError':
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message });
        case 'ConflictError':
            return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message });
        default:
            console.log(error);
            return res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    next();
};
exports.MiddlewareError = MiddlewareError;
