// Refer MDN for details

// Math Methoda and Properties

// 1
console.log(Math.PI);                           // Returns value of 3.14....

// 2: Math.trunc() returns the integer portion of a number
console.log(Math.trunc(Math.PI));

// 3: Math.round() returns value of the number rounded to the nearest integer
console.log(Math.round(Math.PI));
console.log(Math.round(3.4));                  // Returns 3
console.log(Math.round(3.5));                  // Returns 4

// 4: Math.ceil() number will always be rounded up no matter the decimal
console.log(Math.ceil(Math.PI));

// 5: Math.floor() number will always be ronded down no matter the decimal
console.log(Math.floor(Math.PI));

// 6: Math.pow() takes two arguments, the base number and the exponent
console.log(Math.pow(2, 4));                    // 2 to the power of 4
console.log(Math.pow(5, 2));                    // 5 to the power of 2

// 7: Math.min() returns the smallest number from zero or more numbers; separate the numbers by a comma
console.log(Math.min(2, 0.5, 9))

// 8: Math.max() returns the largest number from zero or more numbers
console.log(Math.max(2, 0.5, 9, 9.2))

// 9: Math.random() provides a pseudo random munber from 0 to 1; range is from 0 to 1 but does not include the integer 1
console.log(Math.random());
// To create a javascript expression from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
// Choose Math.floor() NOT Math.ceil() for generating a random number from 1 to 10 because Math.ceil(Math.random() * 10) has a chance of resulting in zero
