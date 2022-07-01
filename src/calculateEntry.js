// const { prices } = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const { adult, senior, child } = countEntrants(entrants);
  return prices.adult * adult + senior * prices.senior + child * prices.child;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
