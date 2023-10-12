// Conditionals: If Statements

// Syntax
if (condition) {
    // run some code
} else {
    // run some different code
}


// Example
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {          // Order of preference matters
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry, we;re out of soup";
}
console.log(reply)


// Example: If-else statements are like the waterfall
let testScore = 89;
let collegeStudent = true;
let grade;
if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else  {                       // If statements can be nested inside if statements
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
} 


// Rock-Paper-Scissor
if (playerOne === computer) {
    // tie game
} else if (playerOne === "rock") {
    if (computer === "paper") {
        // computer wins
    } else {
        // playerOne wins
    }
} else if (playerOne === "paper") {
    if (computer === "scissor") {
        // computer wins
    } else {
        // playerOne wins
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        // playerOne wins
    }
}


// *********************************************************************************************************************************************
