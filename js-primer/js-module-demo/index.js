import calcTaxandSum, { calculatedTax } from "./tax";
import { applyDiscount, printDetails } from "./utils";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product('Hat', 100);
applyDiscount(product, 50);
let taxedPrice = calculatedTax(product.price);
//console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
printDetails(product);

let products = [new Product('Gloves', 23), new Product('Boots', 100)];
let totalPrice = calcTaxandSum(...products.map(p => p.price));
//console.log(`${totalPrice.toFixed(2)}`);
//execute using below command
//npx nodemon --require esm index.js