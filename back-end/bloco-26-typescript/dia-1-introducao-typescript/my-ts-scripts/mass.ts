/*

TODO - Exercício 2: Crie um script para converter unidades de medida de massa:

*  Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
*  valor - number
*  unidade base - string
*  unidade para a conversão - string

*/

import utils from './utils';

const units: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const identity: number = 1;

utils.exec(identity, units);