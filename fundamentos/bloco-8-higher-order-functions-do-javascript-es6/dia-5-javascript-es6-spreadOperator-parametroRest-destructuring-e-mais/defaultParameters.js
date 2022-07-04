// * greeting sem parâmetro
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


// * greeting sem parâmetro (resolvendo usando typeOf)
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!


// * resolvendo de forma simples
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!