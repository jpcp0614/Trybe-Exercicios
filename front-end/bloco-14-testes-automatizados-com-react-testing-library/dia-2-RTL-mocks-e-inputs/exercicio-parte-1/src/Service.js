// Exercícios 1, 2 e 3
const randomNumber = () => Math.floor(Math.random() * 101)

// Exercício 4
const firstFunction = (string) => string.toUpperCase();
const secondFunction = (string) => string.substr(0,1);
const thirdFunction = (a, b) => a + b;

// Exercício 5
const API_URL = 'https://dog.ceo/api/breeds/image/random';
const fetchDog = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.ok ? Promise.resolve(data) : Promise.reject(data))
}

module.exports = {
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
  fetchDog,
}