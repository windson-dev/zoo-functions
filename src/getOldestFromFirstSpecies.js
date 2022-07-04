const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployees = employees.find((element) => element.id === id);
  const getAnimal = species.find((element) => element.id === getEmployees.responsibleFor[0]);

  const getOldestAnimal = getAnimal.residents.sort((a, b) => b.age - a.age);

  const [{ name, sex, age }] = getOldestAnimal;

  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
