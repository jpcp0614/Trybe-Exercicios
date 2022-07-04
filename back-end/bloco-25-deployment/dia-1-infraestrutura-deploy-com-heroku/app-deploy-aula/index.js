const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res, _next) => {
  return res.status(200).send(`Está funcionando na porta ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});