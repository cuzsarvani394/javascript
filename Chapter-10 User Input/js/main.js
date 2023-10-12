// User Input
// 1
alert("Hello World!");

// 2
let myBoolean = confirm("ok === True\nCancel === False");
console.log(myBoolean);

// 3
let naam = prompt("Please enter your name.");           // Cancel returns null value
console.log(typeof naam)                                // type of a prompt is a string
// console.log(naam ?? "You didn't enter your name.");      // ?? (if null or undefined on clicking ok without entering a value then print the string or so and so) knowledge eski operator
if (naam) {
    console.log(naam.length);
    console.log(naam.trim().length);
    console.log(naam.trim())
} else {
    console.log("You didn't enter your name.");
}