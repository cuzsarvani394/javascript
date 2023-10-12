// Objects
// Example 1
const myObj = {
    name : "Dave"
};
console.log(myObj);
console.log(myObj.name);


// Example 2
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverages: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    // All methods are functions; an anonymous function can be added aswell
    action: function() {
        // return "Hello World!";
        return `Time for ${this.beverages.morning}`;        // this refers to the object here
    }
};
console.log(anotherObj.alive);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);
console.log(anotherObj["beverages"]);
console.log(anotherObj.beverages.morning);
console.log(anotherObj.action());


// Example 3
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooooo!"
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);          // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {           // Overwriting
    return "Whooooosh!"
}
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() {
    return "Shhhhhhh....."
}
console.log(tesla.engine());


// Example 4
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));          // Returns a boolean

console.log(Object.keys(band));
console.log(Object.values(band));

// Loops
for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}`);
}

// Destructuring Objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }) { retuen `${vocals} sings!`};
console.log(sings(band));