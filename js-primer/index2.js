// JavaScript objects have a link to another object, known as the prototype, from which they inherit properties
// and methods. Since prototypes are objects and have their own prototype, objects form an inheritance chain
// that allows complex features to be defined once and used consistently.

let hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};
console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`to String ${hat.toString()}`);

let boots = {
  name: 'Boots',
  price: 120,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  }
}

let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function() {return `toString: Name: ${this.name}, Price: ${this.price}`;}
console.log(`Hats prototype-: ${hatPrototype}`)
let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots prototype-: ${bootsPrototype}`)

//check prototype is same or not
console.log(`Common prototype-: ${hatPrototype === bootsPrototype}`);
console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
console.log(`toString: ${hat.toString()}`);