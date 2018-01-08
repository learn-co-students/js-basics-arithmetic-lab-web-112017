/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!


let newID = oldID + 1000000000;

let ageIsValid = Number.isInteger(currentAge);

let randomNumber = Math.random()*10 +11;//0 inclusive - 20 exclusive

let randomInteger = Math.floor(randomNumber); //rounds down to nearest integer 0 - 20 exclusive

let randomUserID = randomInteger + 1 + 1000000000;
