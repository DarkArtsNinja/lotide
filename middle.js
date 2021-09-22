//this is built for comparing functions as they can't be easily compared in JS
function assertArrayEqual(actual, expected){
  let value;
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] === expected[i] && (i < actual.length - 1)) {
      continue;
    }
    else if (actual[i] === expected[i] && (i === actual.length - 1)) {
      value = true;
    }
    else {
      value = false
    }
  }
  if (value === true) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function (arr) {
  switch (true) {
    case (arr.length < 2):
      return [];

    case (arr.length % 2 === 0):
      {
        let arrayMid = ((arr.length / 2) - 1);
        let newArray = [arr[arrayMid], arr[arrayMid + 1]];

        return newArray;
      }
    case (arr.length % 2 === 1):
      {
        let arrayMid = Math.floor((arr.length / 2));
        let newArray = [arr[arrayMid]];
        return newArray;
      }
  }
}

module.exports = middle;

