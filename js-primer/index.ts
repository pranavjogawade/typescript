let hatPrice = 100;
console.log(`Hat Price: ${hatPrice}`);

let bootPrice = 100;
console.log(`Boot Price: ${bootPrice}`);

if(hatPrice === bootPrice) {
    console.log('Both same');
}
let totalPrice = hatPrice + bootPrice;
console.log(`Total price is-: ${totalPrice}`);

function sumPrices(test, ...number) {
    console.log(number);
    return number.reduce((total, val) => total+val, 0);
}
let total = sumPrices(1,2,3);
console.log(total);

let names = ['Pranav', 'Rasika', 'Jogawade'];
let numbers = [1,2,3];

let combinedArray = [...names, ...numbers];
console.log(combinedArray);

console.log('Index | Item');
combinedArray.forEach((item, index)=>console.log('    ' + index + ' | ' + item));

let person = {
    name: 'Pranav',
    surname: 'Jogawade'
}
let rasika = {...person, surname: 'jogawade-chichwade', middlename: 'Pranav'};
console.log(person, rasika);

console.clear();
let myObject = {
    greeting: 'Hi, there',
    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}
