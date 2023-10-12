// Async Await

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}

myCoolFunction();

const anotherFunc = async () => {
    const data = await myCoolFunction();
    // console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList)
}
anotherFunc();
console.log(myUsers.userList);



// Example 1
const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    console.log(userEmailArray);
    // return userEmailArray;
    postToWebPage(userEmailArray);
}
postToWebPage = (data) => {
    console.log(data);
}
getAllUserEmails();

// console.log(getAllUserEmails());            // Wont work still pending



// Example 2
// 2nd parameter of fetch is a object 
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            //Accept: "application/json"
            Accept: "text/plain"
        }
    });
    /* const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke); */

    const textJokeData = await response.text();
    console.log(textJokeData);
}
getDadJoke();



// Example 3
const jokeObject = {
    id: "0oO71TSv4Ed", joke: "Why was it called the dark ages? Because of all the knights."
}
const postData = async (jokeObj) => {
    const response  = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log(jsonResponse.headers);
}
postData(jokeObject);



// Example 4
const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);

    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
    console.log(jsonResponse.value.joke);
}
requestJoke("Clint", "Eastwood");



// abstract into functions
// maybe from a form

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[requestData.categories]`;
}

const requestJokee = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const jokeObj = jsonResponse.value.joke;
    postJokeToPage(joke);
}
const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedure "workflow" function
const processJokeRequest = async () => {
    const requestData = getDatafromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("Finished!")
}
processJokeRequest();