
//(function (){
"use strict";


// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World!";
// }


function sayHello(input) {
       return "Hello, " + input + "!";
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (input % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    if (input === "a" || input === "A") {
        return true;
    } else if (input === "e"|| input === "E") {
        return true;
    } else if (input === "i"|| input === "I") {
        return true;
    } else if (input === "o"|| input === "O") {
        return true;
    } else if (input === "u"|| input === "U") {
        return true;
    } else {
        return false;
    }
}

function add(a, b) {
    console.log("This is a:", parseInt(a));
    console.log("This is b:",parseInt(b));
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return parseInt(a) + parseInt(b);
}








//})();