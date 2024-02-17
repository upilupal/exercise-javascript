//1.  convert celsius to farenheit

// const celcius = 60;
// const farenheit = (celcius * 9) / 5 + 32;
// console.log(farenheit);

// //2. check wether the number is odd or even

// const number = 6;

// if (number % 2 === 0) {
//   console.log("angka genap");
// } else {
//   console.log("angka ganjil");
// }

// // atau bisa juga disederhanakan dengan ternary

// console.log(number % 2 === 0 ? "angka genap" : "angka ganjil");

//3. check whether the number is prime or not

// bilangan prima = bilangan jika dibagi 2 sisa 1

// let checkNumber = 7;

// let isPrime = true;

// if (checkNumber <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < checkNumber; i++) {
//     if (checkNumber % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log(isPrime);

//4. find the sum of the number 1 to n

// const num = 5;
// let sum = 0;
// let message = "";

// for (i = 1; i <= num; i++) {
//     console.log(i)
//     sum += i;

//     message += i + (i !== num ? " + " : "");
// };
// console.log(sum);
// console.log(message + " = " + sum);

//5. find factorial of Number

  //  let result = 1;
  //  const num = 5;
  //  let message = "";

  //  for(i=num; i>=1; i--) {
  //   result *= i;

  //   message += i + (" * " + i !== num ? " * " : "");
  //  };
  //  console.log(result);
  //  console.log(message + " = " + result);

// 6. print the first n fibonacci numbers

// let n = 15;
// let num1 = 0;
// let num2 = 1;
// let sum;
// for (i = 0; i < n; i++) {
//   sum = num1 + num2;
//   num1 = num2;
//   num2 = sum;
// }

// console.log(num1);
