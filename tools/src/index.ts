// old style
// function printMessage(message: string): void {
//     console.log(`Message-: ${message}`);
// }
// printMessage("Hello Typescript");

//new style
debugger;
let printMessage = (msg: string):void => console.log(`Message-: ${msg}`);
let message = printMessage('Hello Typescript, new features');

//to run compile and exexute 
//npx tsc-watch --onsuccess "node dist/index.js"