// var, let and const
var x = 1;
var x = 2;          // Can be redefined
console.log(x);

// Both var and let can be reassigned
let a = 2;
a = 10;
console.log(a);

// const can neither be redefined nor reassigned

// global scope
var x = 1;
// let y = 2;
// const z = 3;


// local scope: block-scope; function-scope; block inside function; function inside a function;
{
    let y = 4;                              // Available only in the local-scope
    console.log(y);
}

function myFunc() {
    const z = 5;
    console.log(z);
}
myFunc();

function myFunc() {
    const z = 5;
    console.log(z);
    console.log(y);                          // logs the global-scope variable; an because the values from local-scope cannot go to the parent
    {
        let y = 4;                              
        console.log(y);
    }
}
myFunc();

function myFunc() {
    const z = 5;
    console.log(z);
    console.log(y);                          
    if (true) {                     // for loops, if-else, switch, other loops can also be used
        let y = 4;    
        const z = 78;                          
        console.log(y);
    }
}
myFunc();

// Code values or the variable values can be passed down global into functions, functions into other functions or blocks of code, but they cannot be passed up 


console.log(y);                             // returns an error as it is not defined in the global-scope but the local-scope
console.log(z);        



// Example
// global scope
var m = 1;      // function-scoped
let n = 2;      // block-scoped
const o = 3;

console.log(`global: ${m}`);
console.log(`global: ${n}`);
console.log(`global: ${o}`);

function myFunc() {
    var m = 10;
    const o = 5;
    console.log(`function: ${m}`);
    console.log(`function: ${n}`);
    console.log(`function: ${o}`);

    {
        var m = 11;       // function-scoped(changes globally)
        const o = 6;
        console.log(`block: ${m}`);
        console.log(`block: ${n}`);
        console.log(`block: ${o}`);
    }
    console.log(`function: ${m}`);
    console.log(`function: ${n}`);
    console.log(`function: ${o}`);
}                                       // pull values from the parent
myFunc();



// Recap
/* global = not in a function or block. Not desirable
local = in a function or block. Not global
var instances function() scoped variables
let and const instantiate {block} scoped variables 
avoid using var. Stick with const and let
use const unless you need to reassign value
use let if you know you will reassign value*/