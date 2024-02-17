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

// function intersection(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   const output = {};

//   for (let i = 0; i < keys1.length; i++) {
//     for (let j = 0; j < keys1.length; j++) {
//       if (keys1[i] === keys2[i] && values1[i] === values2[i]) {
//         output[keys1[i]] = obj1[keys1[i]];
//       }
//     }
//   }

//   return output;
// }

// const object1 = { b: 1, a: 2 };
// const object2 = { b: 1, a: 2 };
// console.log(intersection(object1, object2));

// 3. Create a function to merge two array of student data and remove duplicate data

// function mergeAndRemoveDuplicates(array1, array2) {
//   const mergedArray = array1.concat(array2);

//   // Create a Set to keep track of unique combinations of 'name' and 'email'
//   const uniqueEntries = new Set();

//   // Filter out duplicates based on 'name' and 'email'
//   const uniqueArray = mergedArray.filter(student => {
//       const entry = `${student.name}-${student.email}`;
//       if (!uniqueEntries.has(entry)) {
//           uniqueEntries.add(entry);
//           return true;
//       }
//       return false;
//   });

//   return uniqueArray;
// }

// // Example usage:
// const array1 = [
//   { name: 'Student 1', email: 'student1@mail.com' },
//   { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2 = [
//   { name: 'Student 1', email: 'student1@mail.com' },
//   { name: 'Student 3', email: 'student3@mail.com' }
// ];

// const resultArray = mergeAndRemoveDuplicates(array1, array2);
// console.log(resultArray);


// 4.  Create a function that can accept input as an array of objects and switch all values into property an property into value

// function switcValue(arr) {
//   const switchArray = arr.map(obj => {
//     const switchObject = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         switchObject[obj[key]] = key ;
//       }
//     }
//     return switchObject;
//   });

//   return switchArray;
// }

// const arrayInput = [{ name: "David", age: 20 }];

// const result = switcValue(arrayInput);
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

// const num = 5;
// const factor = factorial(num);
// console.log(factor);
