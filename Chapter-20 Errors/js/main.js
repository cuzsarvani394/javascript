// JavaScript Erors and Error Handling
"use strict";                   // Using strict mode
// variable = "Dave";              // Error is displayed as variable is not defined using const or let or var; without strict mode, it doesn't throw an error
// console.log(variable);


// ReferenceError, TypeError, SyntaxError and other types as well.... CAN REFER TO THE MDN DOCX


const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            /* const name = "Dave";
            name = "Joe"; */
            // throw new customError("This is a custom error!")
            // throw new Error("This is an error!")
            if (i % 2 !== 0) {
                throw new Error("Odd number!")
            }
            console.log("Even number!");
        } catch(err) {
            console.log(err);
            console.warn(err);
            console.error(err);
            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);
            console.table(err);
    
            // logTheError(err.stack);             // Function
        } finally {
            console.log("....Finally")
            i++;
        }
    } 
};
makeError();


function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}