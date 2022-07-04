const bodyParser = require('body-parser');
const express = require('express');
const validatePrice = require('./validatePrice');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 4, name: 'Frango assado', price: 28.0, waitTime: 30 },
  { id: 5, name: 'Filá com fritas', price: 10, waitTime: 10 },
];

app.get('/recipes',
  function (_req, res) {
  return res.status(200).json(recipes);
});

app.post('/recipes', validatePrice,
  function (req, res) {
  const { id, name, price, waitTime } = req.body;

  recipes.push({ id, name, price, waitTime })
  return res.status(201).json({ message: 'Recipe created successfully'});
});

app.put('/recipes/:id', validatePrice,
  function (req, res) {
    const { id } = req.params;
    const { name, price, waitTime } = req.body;
    const recipeId = recipes.findIndex(recipe => recipe.id === parseInt(id));

    if(recipeId === -1) return res.status(404).json({ message: 'Recipe not found'});
    recipes[recipeId] = {...recipes[recipeId], name, price, waitTime };
    return res.status(200).json(recipeId);
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});