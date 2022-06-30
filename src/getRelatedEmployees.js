const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const getManager = employees.some((element) =>
    element.managers.some((element1) => element1 === id));
  return getManager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((element) => element.managers.some((element1) =>
    element1 === managerId)).map((element) =>
    `${element.firstName} ${element.lastName}`);
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
