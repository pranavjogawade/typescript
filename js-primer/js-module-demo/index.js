import { calculatedTax } from "./tax";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product('Hat', 100);
let taxedPrice = calculatedTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);


//execute using below command
//npx nodemon --require esm index.js