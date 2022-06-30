const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getNames = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  if (employeeName === undefined) return {};
  return getNames;
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
