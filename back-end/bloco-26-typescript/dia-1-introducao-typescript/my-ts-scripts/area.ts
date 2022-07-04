/*

TODO - Exercício 2: Crie um script para converter unidades de medida de área:

*  Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/

import utils from './utils';

const units: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const identity: number = 2;

utils.exec(identity, units);