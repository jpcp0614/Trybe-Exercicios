const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Coca-cola Lata', price: 3.0 },
  { id: 2, name: 'Guaraná 600ml', price: 4.0 },
  { id: 3, name: 'Suco de laranja 300ml', price: 4.0 },
  { id: 4, name: 'H2O 500ml', price: 5.0 },
  { id: 5, name: 'Heineken Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 2.0 },
];

const ERROR_404 = { message: 'Recipe not found!'}

app.get('/drink/:id', function (req, res) {

  const { id } = req.params;
  const drinkId = drinks.find((r) => r.id === parseInt(id));

  if(!drinkId) return res.status(404).json(ERROR_404);

  res.status(200).json(drinkId);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

/*
ps -e|grep node
kill -9 71449
*/