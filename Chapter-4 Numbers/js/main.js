// Numbers

// An integer is a whole number
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
// Both integers and floats are numbe data-type
const myFloat = 42.01567;
console.log(myFloat)

const myString = "42";
console.log(myString)

console.log(myNumber === myFloat)               // -----> Returns False
console.log(myNumber === myString)              // -----> Returns False as the data-types are different

console.log(myString + 3)                       // ------> Returns a string after combining

console.log(Number(myString) + 3)               // Returns a number   
console.log(Number(myString) === myNumber)      // Returns True

console.log(Number("Dave"))                     // Returns Nan(not a number; usually with string or undefined data)
console.log(Number("undefined"))                // Returns Nan(not a number) 
console.log(Number(true))                       // Returns 1 for True and 0 for False



// Number Methods
// 1: Number.isInteger()     -----> Determines whether the passed value is an integer or not; Returns a boolean
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myFloat));

// 2: Number.parseFloat()    -----> parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns Nan
const myString2 = "42.123abc"
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString2));       // Removes non-numeric characters and converts other data-type to number data-t
console.log(typeof Number.parseFloat(myString2))

// 3: toFixed()     -----> formats a number according to how many decimal points you provide as the parameter; also rounds up i removing trailing decimals; returns string-data and not number-data
const myFloat2 = 42.01567;
console.log(myFloat2.toFixed(2));

// 4: NUmber.parseInt() parses a string argument and returns an integer
console.log(Number.parseInt(myString));

// 5: toString() returns a string representing the number
console.log(myFloat2.toString());
console.log(typeof myFloat2.toString());

// 6: Number.isNaN() determines whether the passed value is NaN AND its type is number
console.log(Number.isNaN("Dave"));

// 7:global isNaN function determines whether a value is NaN or not
console.log(isNaN("Dave"))                      // Returns True



// Chaining: Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());