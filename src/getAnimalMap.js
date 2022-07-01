const data = require('../data/zoo_data');

const { species, employees, hours, prices } = require('../data/zoo_data');

function getAnimalByRegion(region, includesName, sex, sorted) {
  let animals = species.filter((element) => element.location === region);
  if (includesName) {
    animals = animals.map((element) => (
      { [element.name]: element.residents.map((resident) => resident.name) }
    ));
  }
  return animals;
}

function getAnimalMap(includesName, sex, sorted) {
  const [arrayNE, arrayNW, arraySE, arraySW] = [
    getAnimalByRegion('NE', includesName, sex, sorted),
    getAnimalByRegion('NW', includesName, sex, sorted),
    getAnimalByRegion('SE', includesName, sex, sorted),
    getAnimalByRegion('SW', includesName, sex, sorted)];

  return { NE: arrayNE, NW: arrayNW, SE: arraySE, SW: arraySW };
}

console.log(getAnimalMap(true, 'male', true));

module.exports = getAnimalMap;
