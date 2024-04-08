"use strict";
function addition(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Không hợp lệ";
    }
    else if (typeof b === 'string' && isNaN(Number(b))) {
        return "Không hợp lệ";
    }
    else {
        return Number(a) + Number(b);
    }
}
function subtraction(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Không hợp lệ";
    }
    else if (typeof b === 'string' && isNaN(Number(b))) {
        return "Không hợp lệ";
    }
    else {
        return Number(a) - Number(b);
    }
}
function multiplication(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Không hợp lệ";
    }
    else if (typeof b === 'string' && isNaN(Number(b))) {
        return "Không hợp lệ";
    }
    else {
        return Number(a) * Number(b);
    }
}
function division(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Không hợp lệ";
    }
    else if (typeof b === 'string' && isNaN(Number(b))) {
        return "Không hợp lệ";
    }
    else if (Number(b) === 0) {
        return "Chia cho số không";
    }
    else {
        return Number(a) / Number(b);
    }
}
console.log("Addition:", addition(5, 3));
console.log("Addition:", addition("5", "3"));
console.log("Addition:", addition("Hello", "3"));
console.log("Subtraction:", subtraction(5, 3));
console.log("Subtraction:", subtraction("5", "3"));
console.log("Subtraction:", subtraction("Hello", "3"));
console.log("Multiplication:", multiplication(5, 3));
console.log("Multiplication:", multiplication("5", "3"));
console.log("Multiplication:", multiplication("Hello", "3"));
console.log("Division:", division(10, 2));
console.log("Division:", division("10", "2"));
console.log("Division:", division("Hello", "2"));
console.log("Division:", division(10, 0));
