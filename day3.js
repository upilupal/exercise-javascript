// display the multiplication table of a given integer
let number = 9; 

console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}


// check whether a string is palindrome or not
const inputString = "bebeb";

const cleanStr = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

const reversedStr = cleanStr.split('').reverse().join('');

if(cleanStr === reversedStr) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}

// convert centimeter to kilometer
const centimeter = 100000;

const kilometer = centimeter * 1/100000;
console.log(kilometer + " km");

// format number as currency (IDR)
const amount = 1000;

const formattedCurrency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(amount);

console.log(`Formatted Currency: ${formattedCurrency}`);

// remove the first occurrence of a given "search string" from a string
const string = "hello world";
const searchString = "ell";
const removedString = string.replace(searchString, "");
console.log(removedString);

//  capitalize the first letter of each word
const unCapitalized = "hello world";
const capitalized = unCapitalized.charAt(0).toUpperCase() + unCapitalized.slice(1);
console.log(capitalized);

// reverse a string
const isReverse = "hello";
const reverse = isReverse.split('').reverse().join('');
console.log(reverse);

// swap the case of each character from string
const originalString = "The QuiCk BrOwN Fox";
let swappedString = "";

for (let i = 0; i < originalString.length; i++) {
    const char = originalString.charAt(i);
    if (char === char.toUpperCase()) {
        swappedString += char.toLowerCase();
    } else {
        swappedString += char.toUpperCase();
    }
}

console.log(swappedString);

// find the largest number
// const numb1 = 42;
// const numb2 = 27;
// const largest = Math.max(numb1, numb2);
// const smaller = Math.min(numb1, numb2);
// console.log(`${largest} is larger than ${smaller}`);

// conditional statement to sort three numbers
let num1 = 42;
let num2 = 27;
let num3 = 28;

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(`${num1}, ${num2}, ${num3}`);
    } else {
        console.log(`${num1}, ${num3}, ${num2}`);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        console.log(`${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`${num2}, ${num3}, ${num1}`);
    }
} else {
    if (num1 >= num2) {
        console.log(`${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`${num3}, ${num2}, ${num1}`);
    }
}

// 


