const { hours, species } = require('../data/zoo_data');

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;
const expected = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Tuesday')).map((element) => element.name),
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Wednesday')).map((element) => element.name),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Thursday')).map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Friday')).map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Saturday')).map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: species.filter((element) =>
      element.availability.includes('Sunday')).map((element) => element.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function varInfos(scheduleTarget) {
  const getAnimalsAvailability = species.filter((animalNames) =>
    animalNames.name === scheduleTarget).map((element) => element.availability)[0];
  const getAnimalName = species.map((element) => element.name);
  const getAvailability = species.filter((element) =>
    element.availability.includes(scheduleTarget)).map((element) => element.name);
  const getAnimalsAndDays = Object.keys(hours) + getAnimalName;
  return { getAnimalsAvailability, getAnimalName, getAvailability, getAnimalsAndDays };
}

function getSchedule(scheduleTarget) {
  const { getAnimalsAvailability, getAnimalName,
    getAvailability, getAnimalsAndDays } = varInfos(scheduleTarget);

  if (getAnimalName.includes(scheduleTarget)) { return getAnimalsAvailability; }
  if (scheduleTarget === 'Monday') { return { Monday: expected.Monday }; }
  if (!scheduleTarget || !getAnimalsAndDays.includes(scheduleTarget)) { return expected; }
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${hours[scheduleTarget]
        .open}am until ${hours[scheduleTarget]
        .close}pm`,
      exhibition: getAvailability,
    },
  };
}

module.exports = getSchedule;
