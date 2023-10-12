// Strings
const myVariable = "Mathematics";           // Not using the keyword let because we dont want to reasign the value of this variable


// Length Property
console.log(myVariable.length);
console.log("Every good boy does fine".length);      // Full sentence is one string, length includes spaces as well


// String Methods (All methods need a parenthesis)
// 1
console.log(myVariable.charAt(0));       /* Count starts at from 0 */

// 2
console.log(myVariable.indexOf("mat"));       /* Tells us the position of the first occurance of first occurance of characters or group of characters in a string */
console.log(myVariable.indexOf("at"));       /* Tells us the position of first occurance even when they occur multiple times in the string */
 
// 3
console.log(myVariable.lastIndexOf("mat"));    /* Provides the position of the last occurance of the characters */

// 4
console.log(myVariable.slice(5, 8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5, 2));            // End parameter less than or equal to start parameter, nothing will be returned 
console.log(myVariable.slice(5, 6));            // Only start character is returned

// 5
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

// 6
console.log(myVariable.includes("div"));         // Returns a boolean
console.log(myVariable.includes("mat"));

// 7: returns an array
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John,Joe,Dave".split(","));
console.log("Every good boy does fine".split(" "));



// Refer to MDN String Methods Page