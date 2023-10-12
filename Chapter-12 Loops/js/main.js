// Loops


// While Loop
let myNumber = 0;
while (myNumber < 50) {
    myNumber++;
    // myNumber += 2;
    console.log(myNumber);
    // myNumber = myNumber + 1;
    // myNumber++;
}

// Do not create an endless loop


// Do-While Loop
let myNumb = 50;
do {
    console.log(myNumber);
} while (myNumb < 50);


// For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 
// OR
let i = 1;
for (; i <= 10;) {
    console.log(i);
    i++;
}


// Example using for loop
let namee = "Dave";
for (let i = 0; i <= name.length; i++) {
    console.log(namee.charAt(i));
}


// Using While Loop
let name = "Dave";
let counter = 0;
let myLetter;
/* while (true) {
    myLetter = name(counter);
    console.log(myLetter);
    if (myLetter === "v") break;
    counter++;
} */
while (counter <= 3) {
    myLetter = name(counter);
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "v") break;
    counter++;
}
console.log(counter)