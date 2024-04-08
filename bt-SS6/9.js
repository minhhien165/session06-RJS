"use strict";
let inputString = "banana";
let outputString = "";
for (let i = 0; i < inputString.length; i++) {
    if (outputString.indexOf(inputString[i]) === -1) {
        outputString += inputString[i];
    }
}
console.log("Output:", outputString);
