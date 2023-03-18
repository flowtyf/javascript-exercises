const sumAll = function (a, b) {
  let sum = 0;
  let greaterVal;
  let lesserVal;

  if (a > 0 && b > 0 && typeof a !== "string" && typeof b !== "string") {
    switch (a > b) {
      case true:
        greaterVal = a;
        lesserVal = b;
        break;
      case false:
        greaterVal = b;
        lesserVal = a;
        break;
      default:
        return "ERROR";
    }

    for (let i = lesserVal; i <= greaterVal; i++) {
      sum += lesserVal;
      lesserVal++;
    }
  } else return "ERROR";

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
