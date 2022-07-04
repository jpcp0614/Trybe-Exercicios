"use strict";
/*

TODO - Exercício 2: Crie um script para converter unidades de medida de volume:

*  Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const identity = 3;
utils_1.default.exec(identity, units);
