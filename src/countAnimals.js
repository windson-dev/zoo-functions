const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach(({ name, residents }) => { obj[name] = residents.length; });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    return parseInt(species.filter((element) =>
      element.name === Object.values(animal)[0]).map((element) => element.residents.length), 0);
  }
  if (Object.keys(animal).length > 1) {
    return parseInt(species.filter((element) =>
      element.name === Object.values(animal)[0]).map((element) =>
      element.residents.filter((element1) =>
        element1.sex === 'female')).map((length) => length.length), 0);
  }
}

console.log(countAnimals());

module.exports = countAnimals;
