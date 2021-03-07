class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}`
    }
}

class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }
    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3].reduce((total, p)=> total + p.price, 0);
    }

    *[Symbol.iterator](){
         yield this.prod1;
         yield this.prod2;
         yield this.prod3;
    }
}

let winter = new GiftPack(
                            'winter', 
                            new Product('Hat', 100), 
                            new Product('Boot', 200),
                            new Product('Shirt', 400)
                        );
console.clear();
console.log(`Total Price-: ${winter.getTotalPrice()}`);

[...winter].forEach(p=>console.log(`Product: ${p}`));
