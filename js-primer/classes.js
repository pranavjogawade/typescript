class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}`
    }
}

class TaxProduct extends Product {
    constructor(name, price, taxPrice=1.2) {
        super(name, price);
        this.taxPrice = taxPrice;
    }
    getPriceIncTax() {
        return Number(this.price) * this.taxPrice;
    }
    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
    }
}
let hat = new TaxProduct('Hat', 100);
let boot = new TaxProduct('Boot', 120);
console.clear();
console.log(hat.toString());
console.log(boot.toString());