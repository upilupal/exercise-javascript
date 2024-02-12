// display the multiplication table of a given integer
// let number = 9; 

// console.log(`Multiplication Table for ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
// }


// check whether a string is palindrome or not
// const inputString = "bebeb";

// const cleanStr = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// const reversedStr = cleanStr.split('').reverse().join('');

// if(cleanStr === reversedStr) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }

// convert centimeter to kilometer
// const centimeter = 100000;

// const kilometer = centimeter / 100000;
// console.log(kilometer + " km");

// format number as currency (IDR)
// const amount = 1000;

// const formattedCurrency = new Intl.NumberFormat('id-ID', {
//     style: 'currency',
//     currency: 'IDR'
// }).format(amount);

// console.log(`Formatted Currency: ${formattedCurrency}`);

// remove the first occurrence of a given "search string" from a string
// const string = "hello world";
// const searchString = "ell";
// const removedString = string.replace(searchString, "");
// console.log(removedString);

//  capitalize the first letter of each word
// const input = "hello world";
// let words = input.split(" ");

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// console.log(words);
// console.log(words.join(" "));

// swap the case of each character from string
// const originalString = "The QuiCk BrOwN Fox";
// let swappedString = "";

// for (let i = 0; i < originalString.length; i++) {
//     const char = originalString[i];

//     if (char === char.toUpperCase()) {
//         swappedString += char.toLowerCase();
//     } else {
//         swappedString += char.toUpperCase();
//     }
// }

// console.log(swappedString);

// find the largest number
// const numb1 = 42;
// const numb2 = 50;

// let largest;

// if(numb1 > numb2) {
//     largest = numb1;
// } else {
//     largest = numb2;
// }

// console.log(largest);

// conditional statement to sort three numbers
const num1 = 14;
const num2 = 27;
const num3 = 22;

const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
const middle = num1 + num2 + num3 - smallest - largest;

console.log(`${smallest} ${middle} ${largest}`);

// no 11
const input = "hello world";
let type;

if(typeof input === "string") {
    type = 1;
} else if(typeof input === "number") {
    type = 2;
} else {
    type = 3;
}

console.log(type);

// no 12.
const inputString = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord = "a";
let modifiedString = "";

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === replaceWord) {
        modifiedString += "*";
    } else {
        modifiedString += inputString[i];
    }
}

console.log(modifiedString);


