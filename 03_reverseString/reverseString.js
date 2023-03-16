const reverseString = function (string) {
  const stringArr = string.split('');
  let reversedArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    reversedArr.unshift(stringArr.at(i));
  }
  const reversedString = reversedArr.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
