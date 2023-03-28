const toOneDecimalPlace = (num) => {
  num = Math.round(num * 10) / 10;
  return num;
};

const convertToCelsius = function (temp) {
  let celsConversion = (temp - 32) * (5 / 9);
  celsConversion = toOneDecimalPlace(celsConversion);
  return celsConversion;
};

const convertToFahrenheit = function (temp) {
  let fahrConversion = temp * (9 / 5) + 32;
  fahrConversion = toOneDecimalPlace(fahrConversion);
  return fahrConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
