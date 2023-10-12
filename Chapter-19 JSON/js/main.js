// JSON: JavaScript Object Notation

/* 
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages.... not just in JavaScript.
*/

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!")
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);                      // Doesn't send functions
console.log(typeof sendJSON);               // String
console.log(sendJSON.name)                  // Doesn't respond like an object as it is a string now

const receiveJSON= JSON.parse(sendJSON);
console.log(receiveJSON);                   // receiveJSON is an object again but doesn't contains the method
console.log(typeof receiveJSON);            // type is an object 
