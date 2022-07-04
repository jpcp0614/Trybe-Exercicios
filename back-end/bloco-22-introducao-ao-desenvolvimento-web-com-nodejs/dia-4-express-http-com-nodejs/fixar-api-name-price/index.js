const express = require('express');

const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 3.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 4.0 },
  { id: 3, name: 'Suco de laranja 300ml', price: 4.0 },
  { id: 4, name: 'Suco de laranja 500ml', price: 5.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 2.0 },
];

const ERROR_404 = { message: 'Recipe not found!' };

// home
app.get('/drinks', function (_req, res) {
  return res.status(200).json(drinks);
});

// name filter
app.get('/drinks/search', function (req, res) {
  const { name, minPrice } = req.query;
  const drinkName = drinks
    .filter((n) => n.name.includes(name) && n.price >= minPrice);

  if(drinkName.length === 0) return res.status(404).json(ERROR_404);

  return res.status(200).json(drinkName);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000')
});