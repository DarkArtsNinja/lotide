const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(words){
  let result = {}; //store the values in here

  for (const iterator of words) {
    if (result[iterator]) {
      result[iterator] += 1;
    } else {
      result[iterator] = 1 ;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));