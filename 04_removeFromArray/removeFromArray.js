const removeFromArray = function (array, ...args) {
  let newArr = [];
  array.forEach((item) => {
    // the not logical operator means that "is not a part of args" - invalidates the value of something from true to false
    if (!args.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
