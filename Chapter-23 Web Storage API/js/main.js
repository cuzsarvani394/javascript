// Web Storage API

// Not part of the DOM - refers to the window API;
// Available to JS via the global variable: window
// We do not have to type window. It is implied;

window.alert("OK");
window.alert("OK");window.alert(window.location);
alert(location);
alert("OK");

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

// sessionStorage.setItem("mySessionStore", myObject);
// sessionStorage.setItem("mySessionStore", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStorage");
// console.log(typeof mySessionData);      // Type is a string; sessionStorage and localStorage in web storage API store only string data, if not a string data they are converted to string data
//console.log(mySessionData);
// JSON doesnt keep the methods; it only keeps the properties that we defined
 

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);



localStorage.setItem("myLocalStore", JSON.stringify(myArray));
localStorage.removeItem("myLocalStore")         // Returns null

const key = localStorage.key(0);
console.log(key);
const storeLength = localStorage.length;
console.log(storeLength);

localStorage.clear();
const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));
console.log(myLocalData);