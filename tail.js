const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr){
  if (arr.length === 0) {
    return false;
  } else {
    return arr.slice(1).toString();
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ("Lighthouse", "Labs"));