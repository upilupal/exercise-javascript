// TWO SUM ==================================================================================================
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   };
//   const num = [3,3];
//   const target = 6;
//   console.log(twoSum(num, target));

//   check whether a string is palindrome or not
//   const inputString = "bebeb";

//   const cleanStr = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   const reversedStr = cleanStr.split('').reverse().join('');

//   if(cleanStr === reversedStr) {
//       console.log(`"${inputString}" is a palindrome.`);
//   } else {
//       console.log(`"${inputString}" is not a palindrome.`);
//   }

// function isPalindrome(x) {
//     const reversed = x.toString().split('').reverse().join('');
//     return x.toString() === reversed;
// }

// const input = 121;
// const result = isPalindrome(input);
// console.log(result)

// if (result) {
//     return true;
// } else {
//     return false;
// }

// ROMAN TO INTEGERS ======================================================================================

// var romanToInt = function (s) {
    
//     const roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
    
//     let result = 0;

//     for (i=0; i < s.length; i++){
//         const cur = roman[s[i]];
//         const next = roman[s[i+1]];
    
//         if (cur < next){
//             result += next - cur // IV -> 5 - 1 = 4
//             i++
//         } else {
//             result += cur
//         }
//     }

//     return result;

// }


// const s = "LIX";
// console.log(romanToInt(s));

// MERGED TWO SORTED LIST =============================================================================


// REVERSED LINKED LIST ===============================================================================
var reverseList = function(head) {
    let result = [];
    const reversed = head.reverse();
    return result;
}

const input = [1,2,3,4,5];
const hasil = reverseList(input);
console.log(hasil);