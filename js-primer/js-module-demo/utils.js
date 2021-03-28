import { calculatedTax } from './tax';

export function printDetails(product) {
    let taxedPrice = calculatedTax(product.price);
    console.log(`Name-: ${product.name}, Price-: ${taxedPrice}`);
}
export function applyDiscount(product, discount = 5) {
    //console.log(product.price,discount);
    product.price = product.price - discount;
}