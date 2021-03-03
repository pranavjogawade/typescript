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