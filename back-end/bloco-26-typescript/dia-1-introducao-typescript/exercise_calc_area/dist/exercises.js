"use strict";
// export function greeter(name: string) {
//   return `Olá ${name}`;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezium = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = void 0;
// export function personAge(name: string, age: number) {
//   return `${name} tem ${age} anos`;
// }
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function rhombus(D, d) {
    return (D * d) / 2;
}
exports.rhombus = rhombus;
function trapezium(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezium = trapezium;
function circle(r) {
    return 3.14 * r ** 2;
}
exports.circle = circle;
