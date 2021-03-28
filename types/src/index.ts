function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount *1.2) - discount + extraFees.reduce((total, val)=>total+val,0);
}

let taxValue=  calculateTax(100,10,20,30);
console.log(`Total amount-: ${taxValue}`);
