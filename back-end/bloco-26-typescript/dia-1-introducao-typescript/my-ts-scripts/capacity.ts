/*

TODO - Exercício 2: Crie um script para converter unidades de medida de capacidade:

*  Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/

import utils from './utils';

const units: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const identity: number = 1;

utils.exec(identity, units);