// Storing Data by Index
// You saw how data can be stored in an array. JavaScript also provides Set, which stores data
// by index but has performance optimizations and—most usefully—stores only unique values.
// Useful Set Methods
// Name                 Description
// add(value)           This method adds the value to the Set.
// entries()            This value returns an iterator for the items in the Set, in the order in which they were added.
// has(value)           This value returns true if the Set contains the specified value.
// forEach(callback)    This method invokes a function for each value in the Set.

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product('Hat', 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
    productArray.push(product);
    productSet.add(product);
}

console.clear();
console.log(`Array length: ${productArray.length}`);
console.log(`Set Size-: ${productSet.size}`);