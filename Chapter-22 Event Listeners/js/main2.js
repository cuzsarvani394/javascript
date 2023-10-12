document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view3");
    const myForm  = view.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();             // Loads by default
        console.log("submit event");
    });
}