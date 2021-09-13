const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr){
  if (arr.length === 0) {
    return false;
  } else {
    return arr[0];
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hsdfsdello");