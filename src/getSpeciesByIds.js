const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.species)
// const [id] = species
// console.log(id)
function getSpeciesByIds(...ids) {
  const getId = species.filter((element) => ids.some((element1) => element1 === element.id));

  if (ids === undefined) return [];

  return getId;
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
