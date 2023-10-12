// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await


// Callbacks
function firstFunction(parameter, callback) {
    // do stuff
    callback();
}

// AKA "callback hell": Promises are a way to get rid of it
firstFunction(para, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {

        })
    })
})


// Promises
// 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
    //const error = false;
    const error = false;
    if (!error) {
        resolve("Yes! Resolved the promise");       // Fulfilled state
    } else {
        reject("No! Rejected the promise");         // Rejected state
    }
});

console.log(myPromise)

myPromise.then(value => {
    // console.log(value);
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.log(err)
})

// Fetch API returns a promise on its own; Fetch APi is used to requestig data from another server or another site out there on the web; to simulate how fetch works, is to use timeout which delays the execution of codes
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved");
    }, 3000)
});
myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {           // JavaScript doesnt wait for the delay
    console.log(value);
});


// Waiting for pending state to be fulfilled using thenables
/* const users = fetch("https://jsonplaceholder.typicode.com/users");
// pending state
console.log(users); */

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // console.log(response);
        return response.json();         // json method returns a promise
    })
    .then(data => {
        // console.log(data);
        data.forEach(user => {
            console.log(user);
        })
    })
console.log(users);

// A huge chain of thenables is also not desirable; hence async and await came about; tells the code to wait for this to happen before I do this; but it lets us write the code in a much cleaner manner how we're used to write without chaining these thenables.