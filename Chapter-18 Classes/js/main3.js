// Factory Function
/* function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} pizza.`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake();  */



/* class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;             // underscore indicates that these are intended to be private
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
} */



// Public and Private field class
class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;             
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.getCrust());
// console.log(myPizza.#sauce);
console.log(myPizza.crust);



// caniuse.com to check new features 