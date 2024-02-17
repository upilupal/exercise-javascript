// 1. get the lowest, highest and average value in the array (with and without sort function)
// with sort method =======================================
//  function arrayMu(arr) {
//     // mengurutkan value array dari yang terkecil
//     const sortArray = arr.sort((a, b) => a - b);
//     // mengeluarkan value terkecil dari array
//     const lowest = sortArray[0]; // output: 4
//     // mengeluarkan value terbesar dari array
//     const highest = sortArray[sortArray.length - 1]; // output: 45
//     // jumlahkan seluruh value dalam array
//     const sum = sortArray.reduce((partialSum, a) => partialSum + a, 0);
//     // bagi jumlah value array dengan banyak value dlm array
//     const average = sum / sortArray.length;

//     return {lowest, highest, average}

// }

// const inputArray = [12, 5, 23, 18, 4, 45, 32];
// const result = arrayMu(inputArray);
// console.log(result);

//without sort method

// 2. write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// function splitWords(word) {

// method slice(0, -1) untuk mengambil value index pertama dan index kedua terakhir
// method join(", ") untuk ubah array jadi string kemudian menambahkan tanda koma dan spasi

//   const join = word.slice(0, -1).join(", ") + ", and " + word[word.length - 1];

//   return join;

// }

// const inputArr = ["apple", "orange", "banana", "date", "durian"];
// const result = splitWords(inputArr);
// console.log(result);

// 3. Write a function to split a string and convert it into an array of words

// function splitWords(word) {
//   const split = word.split(" ");

//   return split;
// }

// const result = splitWords("Hello world");
// console.log(result);

//4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

// function calculate(arr1, arr2) {
//   const result = [];
//   const maxLength = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLength; i++) {
//     const sum = (arr1[i] || 0) + (arr2[i] || 0);

//     result.push(sum);
//   }

//   return result;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6];
// const result = calculate(array1, array2);

// console.log(result);

//5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

// function addNum(arr, newElement) {
//       if (arr[arr.length - 1] !== newElement) {
//           arr.push(newElement);
//         }

//     return arr;
// };

// const array = [1, 2, 3, 4];
// const number = 8;
// const result = addNum(array, number);
// console.log(result);

//6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// function removeOdd(arr) {
//     const inputArray = arr.filter((num) => num % 2 === 0);
//     return inputArray;

// };

// const inputArray = [1, 2, 3, 4, 5, 6];
// const result = removeOdd(inputArray);
// console.log(result);

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).

// function maxSize(max, ...numbers) {
//     const result = [];

//     numbers.forEach((item) => {
//         if (result.length === max) return;

//         result.push(item);
//     });

//     return result;
// }

// const max = 5;
// const num = [5, 10, 24, 3, 6, 7, 8]
// console.log(maxSize(max, ...num))

// 8. write a function that will combine 2 given array into one array
// function addArr(arr1, arr2) {
//   const result = arr1.concat(arr2);

//   return result;
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(addArr(array1, array2));

// 9. write a function to find duplicate values in an array
// function findDuplicates(arr) {
//   const duplicates = [];

//   for (let i = 0; i < arr.length; i++) {
//     // membandingkan value arr[i] dengan value setelahnya
//     for (let j = i + 1; j < arr.length; j++) {
//       //periksa apakah nilai pada indeks i sama dengan nilai pada indeks j dan apakah nilai tersebut belum ada dalam array duplicates
//       if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//         // menambahkan nilai yang sama ke dalam array duplicates jika kondisinya terpenuhi
//         duplicates.push(arr[i]);
//       }
//     }
//   }

//   return duplicates;
// }

// const array = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(findDuplicates(array));

// 10. Write a function to find the difference in 2 given array
// function findDifference(arr1, arr2) {
//     // pake method filter untuk mencari value yang ada di arr1 tapi gaada di arr2
//     const difference1 = arr1.filter((value) => !arr2.includes(value));
//     const difference2 = arr2.filter((value) => !arr1.includes(value));

//     const differences = difference1.concat(difference2);

//     return differences;
// };

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findDifference(array1, array2));

// 11. Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []].
// function filterPrimitives(arr) {
//     const filteredArr = arr.filter(element => {
//       // Use typeof to check the type of each element
//       return typeof element !== 'object';
//     });

//     return filteredArr;
//   };

//   // Example usage:
//   const arr = [1, [], undefined, {}, "string", {}, []];
//   const result = filterPrimitives(arr);
//   console.log(result);

// 12. Write a function from a given array of numbers and return the second smallest number

// function seconSmallest(arr) {
//     const sortedArray = arr.sort((a,b) => a - b);
//     console.log(sortedArray);
//     const secondSmallest = sortedArray[1];

//     return secondSmallest;
// };

// const array = [5, 3, 1, 7, 2, 6];
// console.log(seconSmallest(array));

// 13. write a function from a given array of mixed data types and return the sum of all the number

// function sumNumber(arr) {
//     const resultArr = [];

//     for(i = 0; i < arr.length; )
// }


// 14. Write a function from the below array of number that will return sum of duplicate values.
// function sumDuplicate(arr) {
//     const duplicateVAlues = arr.filter((value, index, array) => {
//         return array.indexOf(value) !== index;
//     });
//     console.log(duplicateVAlues);

//     let result = 0;
//     for (let item of arr) {
//         if(duplicateVAlues.includes(item)) {
//             result += item;
//         }
//     }

//     return result;
// };

// console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// 15.Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// function gameSuit(playerChoice) {
//     const choices = ["batu", "gunting", "kertas"];
//     const compChoice = choices[Math.floor(Math.random() * 2.9)];

//     if (playerChoice === compChoice) {
//         return "draw";
//     }

//     if (
//         (playerChoice === "batu" && compChoice === "gunting") ||
//         (playerChoice === "gunting" && compChoice === "kertas") ||
//         (playerChoice === "kertas" && compChoice === "batu")
//     ) {
//         return "win";
//     }

//     return "lose"
// }

// console.log(gameSuit("gunting"));