// Using Constructor Functions
// A constructor function is used to create a new object, configure its properties, and assign its prototype, all of
// which is done in a single step with the new keyword. Constructor functions can be used to ensure that objects
// are created consistently and that the correct prototype is applied
console.clear()
let Product = function(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

//constructor chaining --> inheritence
let TaxedProduct = function(name, price, taxRate) {
    // The call method allows the new object to be passed to the next constructor through the this value.
    Product.call(this, name, price);
    this.taxRate = taxRate;
}

// The second step is to link the prototypes together.
//Setting product prototype to taxProduct's prototype
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
    return Number(this.price) * this.taxRate;
}
TaxedProduct.prototype.toTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}
let hat = new TaxedProduct('Hat', 100, 1.2);
let boot = new Product('Boot', 110);

console.log(hat.toTaxString());
console.log(boot.toString());


