// DOM - Document Object Model;
// 1
const view1 = document.getElementById("view1");
console.log(view1);

// 2
const view2 = document.querySelector("#view2");
console.log("view2");

view1.style.display = "none";
view2.style.display = "flex";


// 3
const views = document.getElementsByClassName("view");          // Returns a HTML Collection
console.log(views);

// 4
const sameViews = document.querySelectorAll(".view");          // Returns a Nodelist
console.log(sameViews);

// 5
const divs = view1.querySelectorAll("div");                     // Returns a Nodelist
console.log(divs);

// 6
const sameDivs = view1.getElementsByTagName("div");             // Returns a HTML Collection
console.log(sameDivs);

// 7
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// 8
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.length = "200px";
}

// 9
const navText = document.querySelector("nav h1");
console.log(navText)
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello</h1> <p>This should aligh right</p>`;
console.log(navbar);
navbar.style.justifyContent = "space-between";

// 10
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].prevoiusSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousElementSibling);

// 11
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}
//createDivs(view2, 10);
for (let i = 1; i <= 12; i++) {
    createDivs(view1, i);
}