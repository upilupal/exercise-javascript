// 1. create two function to check if two objects are equal
//  function isEqual(obj1, obj2) {
//     if (obj1.a !== obj2.a) {
//         return false;
//     } else if((obj1.a) === (obj2.a)) {
//         return true;
//     }
//  }

//  const object1 = {a: "hello"};
//  const object2 = {a: 2};
//  const result = isEqual(object1, object2);
//  console.log(result);

// 2. create function to get the inteersection of two object

// const intersection = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   const output = {};

//   for (let i = 0; i < keys1.length; i++) {
//     for (let j = 0; j < keys2.length; j++) {
//       if (keys1[i] === keys2[j] && values1[i] === values2[j]) {
//         output[keys1[i]] = obj1[keys1[i]];
//       }
//     }
//   }

//   return output;
// }

// const object2 = { b: 1, a: 2, d: 4 };
// const object1 = { a: 2, b: 1, c: 4 };
// console.log(intersection(object1, object2));

// CARA KAK DANIEL ========================================================================================================
// const intersection = (obj1, obj2) => {
//     const output = {};

//     for (let key in obj1) {
//         console.log(key);
//         if (obj1[key] == obj2[key]) {
//             output[key] = obj1[key];
//         }
//     }

//     return output;
// }

// const object2 = { b: 1, a: 2, d: 4 };
// const object1 = { a: 2, b: 1, c: 4 };
// console.log(intersection(object1, object2));

// 3. Create a function to merge two array of student data and remove duplicate data

// const removeDuplicate = (arr1, arr2) => {
//   const combineArray = [...arr1, ...arr2];

//   const temp = [];

//   for (let i = 0; i < combineArray.length; i++) {
//     const duplicateVal = temp.filter((val) => {
//       return val.email === combineArray[i].email;
//     });

//     if (!duplicateVal.length) {
//       temp.push(combineArray[i]);
//     }
//   }

//   return temp;
// };

// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];

// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// const resultArray = removeDuplicate(array1, array2);
// console.log(resultArray);

// 4.  Create a function that can accept input as an array of objects and switch all values into property an property into value

// const switchValue = (arr) => {
//     const result = [];

//     arr.forEach(item => {
//         let temp = {};

//         for (let key in item) {
//             // console.log(key);
//             // console.log(item[key]);
//             temp[item[key]] = key;
//         }

//         result.push(temp);
//     });

//     return result;
// }

// const arrayInput = [{ name: "David", age: 20 }];

// const result = switchValue(arrayInput);
// console.log(result);

//5. find factorial number
// function factorial(n) {
//   let message = "";
//   let result = 1;
//   for (let i = n; i >= 1; i--) {
//       result *= i;
//       message += i + (i !== 1 ? " * " : "");
//   }
//   console.log(`${n}! = ${message} = ${result}`);
//   return result; // Add this line to return the result
// }

// const num = 4;
// const factor = factorial(num);
// console.log(factor);
