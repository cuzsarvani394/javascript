// JavaScript Event Listeners
const view = document.querySelector("#view2");
console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// script defer

// Syntax: addeventListener(event, function, useCapture)
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});

/* h2.addEventListener("click", function (event) {
    console.log(event.target);
    event.target.textContent = "Clicked";
}); */


doccument.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete")
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    // event bubbling
    view.addEventListener("click", (event) => {
        event.stopPropagation();            
        //view.style.backgroundColor = "purple";
        //event.target.style.background = "purple"
        view.classList = toggle("purple");
        view.classList = toggle("darkblue");
    }, false);               // Default is false; // true: from outside to inside

    div.addEventListener("click", (event) => {
        // div.style.backgroundColor = "blue";
        //event.target.style.background = "blue";
        div.classList = toggle("blue");
        div.classList = toggle("black");
    }, false);

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "my 2nd view" ? event.target.textContent("Clicked") :  event.target.textContent("My 2nd view");
        // event.target.textContent = "Clicked";
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    });
};