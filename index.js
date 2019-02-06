// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2,drivers.lenght);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}
