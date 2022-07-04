/*

TODO - Exercício 1: Crie um script para converter unidades de medida de comprimento:

* Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/

import utils from './utils';

const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const identity: number = 1;

utils.exec(identity, units);
