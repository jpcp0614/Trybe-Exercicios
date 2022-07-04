const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];



app.get('/recipes', function (_req, res) {
  return res.status(200).json(recipes);
});


app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filterName = recipes.filter(recipe => recipe.name.includes(name));
  
  if (filterName.length === 0) return res.status(404).json({ message: 'Recipe not found' });
  return res.status(200).json(filterName);
});


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const findId = recipes.find(recipe => recipe.id === parseInt(id));
  
  if (!findId) return res.status(404).json({ message: 'Recipe not found' })
  return res.status(200).json(`Recipe: ${findId.name} - waitTime: ${findId.waitTime}`);
});


app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  
  return res.status(201).json({ message: 'Recipe created successfully!'});
});


app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));
  
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };
  res.status(204).end();
});


app.delete('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });
  recipes.splice(recipeIndex, 1);
  return res.status(204).end();
});


app.all('*', function (req, res) {
  return res.status(404).json({ message: `Route '${req.path}' don't exist!`});
});


app.listen(3000, () => {
  console.log('Listening port 3000')
})