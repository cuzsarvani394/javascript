// JavaScrip Classes
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class specialityPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.pizza} pizza has 8 slices.`);
    }
}

const mySpeciality = new specialityPizza("medium");
mySpeciality.slice();

