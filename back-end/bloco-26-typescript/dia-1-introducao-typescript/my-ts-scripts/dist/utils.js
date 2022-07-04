"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const base = 10;
function errorUnity(unity) {
    throw new Error(`A unidade ${unity} não é válida`);
}
function convert(identity, units, valor, unityInput, unityOutput) {
    if (!units.includes(unityInput))
        errorUnity(unityInput);
    if (!units.includes(unityOutput))
        errorUnity(unityOutput);
    const indexInput = units.indexOf(unityInput);
    const indexOutput = units.indexOf(unityOutput);
    const exp = (indexOutput - indexInput) * identity;
    const convertCalc = valor * Math.pow(base, exp);
    const scientificNot = convertCalc.toExponential(2);
    return scientificNot;
}
function exec(identity, units) {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const unityInput = readline_sync_1.default.keyInSelect(units, 'Selecione a unidade de entrada: \n', { cancel: 'SAIR' });
    if (unityInput === -1)
        return console.log('Good bye!!!');
    const unityOutput = readline_sync_1.default.keyInSelect(units, 'Selecione a unidade de saída: \n', { cancel: 'SAIR' });
    if (unityOutput === -1)
        return console.log('Good bye!!!');
    const itemInput = units[unityInput];
    const itemOutput = units[unityOutput];
    const result = convert(identity, units, valor, itemInput, itemOutput);
    const message = `${valor}${itemInput} é igual a ${result}${itemOutput}`;
    console.log(message);
}
exports.default = {
    exec,
};
