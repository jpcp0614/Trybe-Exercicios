/*

TODO - Exercício 2: Crie um script para converter unidades de medida de volume:

*  Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/

import utils from './utils';

const units: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const identity: number = 3;

utils.exec(identity, units);