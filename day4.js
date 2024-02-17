// example triangle function
// function createTriangle(height) {    
//     for (let i = 1; i <= height; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += j + " ";
//       }
//       console.log(row.trim());
//     }
//   }

//   createTriangle(5);


// 1. create triangle with function
// function createTriangle(height) {
//     let counter = 1;
    
//     for (let i = 1; i <= height; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//         row += (counter < 10 ? "0" : "") + counter + " ";
//         counter++;
//       }
//       console.log(row.trim());
//     }
//   }

//   createTriangle(5);

// 2. fizzbuzz function
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
    
//     if (i % 15 === 0) {
//       output += "FizzBuzz";
//     } else if (i % 3 === 0) {
//       output += "Fizz";
//     } else if (i % 5 === 0) {
//         output += "Buzz";
//     } else {
//       output = i;
//     }

//     console.log(output);
//   }
// }

// fizzBuzz(15);

// 3. function to calculate body mass index
// function bodyMassIndex(weight, height) {
//   // konversi height (cm) ke meter(m)
//   const heightInMeters = height / 100;
//   //rumus BMI
//   const bmi = weight / (heightInMeters * heightInMeters);

//   if (bmi < 18.5) {
//     return "less weight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "ideal";
//   } else if (bmi >= 25.0 && bmi <= 29.9) {
//     return "overweight";
//   } else if (bmi >= 30.0 && bmi <= 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }

// const result = bodyMassIndex(60, 164);

// console.log(result);

// 4. .Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// menggunakan build in method ======================================================================
// function removeOddNum(arr) {
//     // filter method ini untuk membuat array baru yang nampilin angka genap
//     const evenNum = arr.filter((num) => num % 2 === 0); 
//     return evenNum;
// };

// const input = [1,2,3,4,5,6,7,8,9,10];
// const result = removeOddNum(input);

// console.log(result);

// gapake build in method =============================================================================
// function removeOddNum(arr) {
// const evenNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//     }
// }

// return evenNumbers
// }

// const inputArr = [1,2,3,4,5,6,7,8,9,10];
// console.log(removeOddNum(inputArr));

// 5. .Write a function to split a string and convert it into an array of words
// function splitWords(word) {
//     const split = word.split(" ");
//     return split;
// };

// const result = splitWords("Hello world");
// console.log(result);

// tanpa menggunakan build in mtehod =============================================================
// const splitString = function(input) {
//     const kata = [];
//     let temp = "";

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === " ") {
//             kata.push(temp);
//             temp = "";
//             continue; // meng skip loopingan
//         }
//         temp += input[i];
//     }
//     kata.push(temp);

//     return kata;
// };

// console.log(splitString("hello world jogja"));





