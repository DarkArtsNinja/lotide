const tail =  require('../tail');
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(/*tail*/(["Hello", "Lighthouse", "Labs"]), ("Lighthouse", "Labs"));

