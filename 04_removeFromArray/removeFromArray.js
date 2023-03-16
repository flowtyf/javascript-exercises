const removeFromArray = function (array, ...value) {
  let arr = arguments[0];
  for (const values of value) {
    let index = arr.indexOf(values);
    arr.splice(index, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
