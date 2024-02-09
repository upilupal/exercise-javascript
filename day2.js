//1.  convert celsius to farenheit

const celcius = 60;
const farenheit = ((celcius*9/5) + 32);
console.log(farenheit);

//2. check wether the number is odd or even

const number = 4;

if (number % 2 === 0) {
    console.log("angka genap")
} else {
    console.log("angka ganjil")
};

//3. check whether the number is prime or not

// bilangan prima = bilangan jika dibagi 2 sisa 1

// let checkNumber = 7; 

// let isPrime = true;

// if (checkNumber <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= checkNumber / 2; i++) {
//         if (checkNumber % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }   
// }

// if (isPrime) {
//     console.log(`${checkNumber} is a prime number.`);
// } else {
//     console.log(`${checkNumber} is not a prime number.`);
// }


    //4. find the sum of the number 1 to n

    // let sum = 0;
    // let n = 5;
    // for (i = 1; i <= n; i++) {
    //     sum += i;
    // };
    // console.log(sum);

    //5. find factorial of Number

//    let result = 1;
//    const num = 4;

//    for(i=1; i<=num; i++) {
//     result *= i;
//    };
//    console.log(result)

   // 6. print the first n fibonacci numbers

    let n = 15;
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 0;
	for (i = 1; i < n; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}

console.log(sum);









    


    



    

    




