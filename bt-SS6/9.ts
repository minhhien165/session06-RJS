let inputString: string = "banana";
let outputString: string = "";

for (let i = 0; i < inputString.length; i++) {
  if (outputString.indexOf(inputString[i]) === -1) {
    outputString += inputString[i];
  }
}

console.log("Output:", outputString);