// Arrays
const myArray = [];                 // To store data; cannot be reassigned however elements inside the array are mutable(can be changed)

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArrat[2] = false;
console.log(myArray);
console.log(myArray.length);
console.log(myArray(myArray.length - 1));        // last element
console.log(myArray[1]);

// Methods
// 1
const newLengt = myArray.push("school");
console.log(newLengt);
console.log(myArray);

// 2
const lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray);

// 3
const newLength = myArray.unshift("apple");
console.log(newLength);
console.log(myArray);

// 4
const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);                   // Positions shift aswell and if you are trying to log something that doesn't exist, it shows undefined

// 5
delete myArray[1];
console.log(myArray)                    // leaves undeined data as empty at that position
 
// 6
myArray.splice(1, 1, 42);                   // (start, number of elements to be removed, replace)
myArray.splice(1, 0, 42); 
console.log(myArray)

// 7
const myArrayy = ["A", "B", "C", "D", "E", "F"];
const newArrayy = myArrayy.slice(2);
const newArr = myArrayy.slice(2, 5);
console.log(newArrayy);
console.log(newArr);

// 8
myArrayy.reverse();
console.log(newArrayy);

// 9
const newString = myArrayy.join();          // joins using commas and makes a string
console.log(newString);

// 10
const newArra = newString.split(",");
console.log(newArra);

// 11
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
// const newAar = myArrayA.concat(myArrayB);
// const newAar = myArrayB.concat(myArrayA);
console.log(myAar);

// 12: spread operator
const newAar = [...myArrayA, ...myArrayB];
const newAarr = [myArrayA, myArrayB];
console.log(newAar);
console.log(newAarr);


// Example
const equipShelfA = ["baseball", "football","volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[0]);
console.log(clothesShelfB[1]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

// Nested Arrays
console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[0][1]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

