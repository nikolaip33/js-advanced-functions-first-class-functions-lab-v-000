// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2,drivers.lenght);
}

const selectingDrivers = function (drivers) {
  return [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)]
}