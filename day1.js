// 1. find area of rectangle
let length1 = 5;
let width1 = 3;
let area = length1 * width1;
console.log(area);

// 2. find perimeter of rectangle
const length2 = 3;
const width2 = 5;
const perimeter = 2 * (width2 + length2);
console.log(perimeter);

// 3. diameter, circumference, area of circle
const radius = 5;
const phi = 3.14;
const diameter = radius * 2;
console.log(diameter);
const circumference = 2 * phi * radius;
console.log(circumference);
const area2 = phi * (radius * radius);
console.log(area2);

// 4. find angles of triangle
const sudutA = 80;
const sudutB = 65;
const totalSudut = 180;
const C = totalSudut - (sudutA + sudutB);
console.log(C);

// 5. get difference between dates in days
const date1 = new Date("2022-01-20");
const onlyDate1 = date1.getDate(); //return 20
const date2 = new Date("2022-01-22");
const onlyDate2 = date2.getDate(); //return 22
const dateDifference = onlyDate2 - onlyDate1;
console.log(dateDifference);

// 6. convert days to years, months, and days
// define a function that takes a number of days as input
function daysToYearsMonthsDays(days) {

  const years = Math.floor(days / 365);
  let remainingDays = days % 365;
  // console.log(remainingDays)

  const months = Math.floor(remainingDays / 30);
   remainingDays %= 30;
  //  console.log(remainingDays)

  return {years, months, remainingDays};
}

// Example usage
const totalDays = 400;
const result = daysToYearsMonthsDays(totalDays);

console.log(`${totalDays} days is equal to ${result.years} year, ${result.months} month, and ${result.remainingDays} days.`);
