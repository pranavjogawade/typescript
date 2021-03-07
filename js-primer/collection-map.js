console.clear();
/* Useful Map Methods
Name            Description
set(key, value) This method stores a value with the specified key.
get(key)        This method retrieves the value stored with the specified key.
keys()          This method returns an iterator for the keys in the Map.
values()        This method returns an iterator for the values in the Map.
entries()       This method returns an iterator for the key/value pairs in the Map, 
                each of which is presented as an array containing the key and value. This is the default iterator for Map objects. 
                
The main advantage of using a Map is that any value can be used as a key, including Symbol values.                
*/
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Name: ${this.name}, Price: ${this.price}`
    }
}

let data = new Map();
data.set('hat', new Product('Hat', 100))
data.set('boots', new Product('Boot', 100))

console.log(data.keys());
[...data.keys()].forEach(key => {
    console.log(data.get(key).toString());
});