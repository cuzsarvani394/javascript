// Functions

// Methods: Built-in Functions!
"Dave".toLocaleLowerCase();
Math.random();


// Function Declaration Syntax
function sum(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(2, 6));                 // function has to be called
console.log(sum(2));


// Example 
function getUserNameFromEmail(email) {
    return email.slice(0, email.IndexOf("@"));
};
console.log(getUserNameFromEmail("playerOne@oneRandomEmail.com"));
console.log(getUserNameFromEmail("user@Github.com"));


// Example of anonymous functions: same result as before
const getUserNameFromEmail = function (email) {
    return email.slice(0, email.IndexOf("@"));
};
console.log(getUserNameFromEmail("dave@davesdomain.com"));


// Arrow Functions
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.IndexOf("@"));
};
console.log(getUserNameFromEmail("john@davesdomain.com"))


// Example
const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("sArVanIi"));


// Functions provide Reusable Code!