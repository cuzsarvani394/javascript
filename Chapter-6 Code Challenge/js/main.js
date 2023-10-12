// Write a code that will return a random letter from your name
console.log("Dave".charAt(Math.floor(Math.random() * 4)));

// Let's make it work for any name
const anyName = "Jonathan";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));