"use strict";
/*

Temos um array characters que agrupa dados de jogadores em um MMORPG
(“Jogo de representação de papéis online, multijogador em massa”)
usado para manter o registro de uma guilda (grupo de jogadores) no
acompanhamento da evolução do grupo. Esses dados foram adicionados
sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro.
Faça a correta tipagem do array através da tipo character e da função usada
para imprimir as informações básicas de todos os jogadores.

*/
const characters = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
characters.forEach(printCharacter);
