const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");

console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]) );
console.log(middle([1, 2, 3, 4, 5, 6]));