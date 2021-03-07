// The function itself is simple, and it is the export and default keywords that are important. The export keyword
// is used to denote the features that will be available outside the module. By default, the contents of the
// JavaScript file are private and must be explicitly shared using the export keyword before they can be used 
// in the rest of the application.
// The default keyword is used when the module contains a single feature
export function calculatedTax(price) {
    return Number(price) * 1.3
}