const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 4, name: 'Espaguete ao molho sugo', price: 25.0, waitTime: 20 }
];

const drinks = [
  { id: 1, name: 'Cerveja Long Neck', price: 3.0 },
  { id: 2, name: 'Guaraná 600ml', price: 4.0 },
  { id: 3, name: 'Suco de laranja 300ml', price: 4.0 },
  { id: 4, name: 'H2O 500ml', price: 5.0 },
  { id: 5, name: 'Heineken Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 2.0 },
];

// app.get('/recipesDrinks', function (_req, res) {
//   const recipesSort = recipes.sort(function (a, b) {
//     if (a.name < b.name) return -1
//   });
//   const drinksSort = drinks.sort(function (a, b) {
//     if (a.name < b.name) return -1
//   });

//   const API = {
//     recipesSort,
//     drinksSort
//   }
  
//   return res.status(200).json(API);
// });

const ERROR_404 = { message: 'Recipe not found!'}
const ERROR_404_ROUTE = (req) => ({ message: `The route ${req.path} don't exist!` });

//* RECIPES AND DRINKS
app.get('/api', function (_req, res) {
  const api = { recipes, drinks };

  if (!Object.keys(api).length) return res.status(404).json(ERROR_404);
  
  return res.status(200).json(api);
});


//* RECIPES
app.get('/api/recipes', function (_req, res) {
  if (recipes.length === 0) return res.status(404).json(ERROR_404);

  return res.status(200).json({ recipes });
});

app.get('/api/recipes/search', function (req, res) {
  const { name } = req.query;
  const getRecipeName = recipes.filter(recipe => recipe.name.includes(name));
  if (getRecipeName.length === 0) return res.status(404).json(ERROR_404);

  return res.status(200).json(getRecipeName);
});

app.get('/api/recipes/:id', function (req, res) {
  const { id } = req.params;
  const getRecipeId = recipes.find(recipe => recipe.id === parseInt(id));
  if (!getRecipeId) return res.status(404).json(ERROR_404);

  return res.status(200).json({ getRecipeId });
});


//* DRINKS
app.get('/api/drinks', function (_req, res) {
  if (drinks.length === 0) return res.status(404).json(ERROR_404);

  return res.status(200).json(drinks);
});

app.get('/api/drinks/search', function (req, res) {
  const { name } = req.query;
  const getDrinkName = drinks.filter(drink => drink.name.includes(name));
  if (getDrinkName.length === 0) return res.status(404).json(ERROR_404);

  return res.status(200).json(getDrinkName);
});

app.put('/api/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const putDrinkId = drinks.findIndex(drink => drink.id === parseInt(id));

  if (putDrinkId === -1 ) return res.status(404).json(ERROR_404);

  drinks[putDrinkId] = {...recipes[putDrinkId], name, price};

  return res.status(204).end();
});

app.post('/api/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  return res.status(201).send(`Added ${ name } successfully!`)
});

app.delete('/api/drinks/:id', function (req, res) {
  const { id } = req.params;
  const deleteDrinkId = drinks.findIndex(drink => drink.id === parseInt(id));

  if (deleteDrinkId === -1 ) return res.status(404).json(ERROR_404);

  drinks.splice(deleteDrinkId, 1);

  return res.status(204).end();
});


//* APP.ALL
app.all('*', function (req, res) {
  return res.status(404).json(ERROR_404_ROUTE(req));
});


//* LISTEN
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});