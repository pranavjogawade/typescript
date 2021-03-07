class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}`
    }
}

function createProductIterator() {
    const hat = new Product('Hat', 100);
    const boot = new Product('Boot', 120);
    const shirt = new Product('Shirt', 220);

    let lastVal;
    return {
        next() {
            switch(lastVal) {
                case undefined:
                    lastVal = hat;
                    return {value: hat, done: false}
                case hat:
                    lastVal = boot;
                    return {value: boot, done: false}
                case boot:
                    lastVal = shirt;
                    return {value: shirt, done: false}
                case shirt:
                    return {value: undefined, done: true}
            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next();
while(!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}