const drinks = [
  { id: 1, name: 'Cerveja Long Neck', price: 3.0 },
  { id: 2, name: 'Guaraná 600ml', price: 4.0 },
  { id: 3, name: 'Suco de laranja 300ml', price: 4.0 },
  { id: 4, name: 'H2O 500ml', price: 5.0 },
  { id: 5, name: 'Heineken Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 2.0 },
];

function filterDrinks(name) {

  const filterName = drinks.filter(elem => elem.name.includes(name))
  console.log(filterName);
}

filterDrinks('Água');