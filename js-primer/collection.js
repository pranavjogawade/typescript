console.clear();
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}`
    }
}

let data = {
    hat: new Product('Hat', 100)
}

data.boots = new Product('Boots', 200);

let keys = Object.keys(data);
console.log(keys);
keys.forEach(ele => {
    console.log(data[ele].toString());
});