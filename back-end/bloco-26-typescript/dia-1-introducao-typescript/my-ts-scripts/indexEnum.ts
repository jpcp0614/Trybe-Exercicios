import readline from 'readline-sync';
import Seasons from './Seasons';
import Months from './Months';

const months: string[] = Object.values(Months);
const arrayMonths: string[] = months.map(month => month)

const seasonsSouth = {
  [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
  [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
  [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
  [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March]
}

const seasonsNorth = {
  [Seasons.Autumn]: seasonsSouth[Seasons.Spring],
  [Seasons.Winter]: seasonsSouth[Seasons.Summer],
  [Seasons.Spring]: seasonsSouth[Seasons.Autumn],
  [Seasons.Summer]: seasonsSouth[Seasons.Winter]
}

const hemispheres = {
  'North': seasonsNorth,
  'South': seasonsSouth,
}

function whatSeason() {

  const monthChose = readline.keyInSelect(arrayMonths, 'Escolha um mês do ano: \n', { cancel: 'SAIR' });
  if (monthChose === -1) return console.log('Good bye!!!');

  const hemisphereChose = readline.keyInSelect(['North', 'South'], 'Escolha um hemisfério: \n', { cancel: 'SAIR' });
  if (hemisphereChose === -1) return console.log('Good bye!!!');

  
}