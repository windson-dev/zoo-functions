const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.filter((element) => element.name === animal);
  const [{ residents }] = getAnimal;
  return residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('lions', 10));

module.exports = getAnimalsOlderThan;
