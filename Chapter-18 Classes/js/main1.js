// JavaScript Classes
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.topping = [];
    }
    /* get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } */
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.getToppings;
    }
    setToppings(topping) {
        this.getToppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

// Creating an object
const myPizza = new Pizza("pepproni", "small");

// myPizza.type = "supreme";           // Not usually prefered
// myPizza.pizzaCrust = "sausage";
// console.log(myPizza.pizzaCrust)

myPizza.setCrust("thin");
console.log(myPizza.getCrust());

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

// console.log(myPizza.type);

myPizza.bake();