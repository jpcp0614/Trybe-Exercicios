"use strict";
/*

TODO - Exercício 1: Crie um script para converter unidades de medida de comprimento:

* Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const identity = 1;
utils_1.default.exec(identity, units);
