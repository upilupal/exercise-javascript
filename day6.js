// 1.

function calculateStudentData(students) {
  // Calculate Score
  // pake .map untuk buat array baru yang isinya score
  const scores = students.map((student) => student.Score);
  const scoreStatistics = {
    Highest: Math.max(...scores),
    Lowest: Math.min(...scores),
    Average: scores.reduce((sum, score) => sum + score, 0) / scores.length,
  };
//   console.log(scoreStatistics.Average);

  // Calculate Age
  const currentYear = new Date().getFullYear();
  const ages = students.map((student) => currentYear - student.Age);
  const ageStatistics = {
    Highest: Math.max(...ages),
    Lowest: Math.min(...ages),
    Average: Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length),
  };
//   console.log(ageStatistics.Average);

  return {
    Score: scoreStatistics,
    Age: ageStatistics,
  };
}

// Example usage:
const students = [
  { Name: "Prabrobro", Email: "prabrobro@example.com", Age: 1990, Score: 85 },
  { Name: "Wijoko", Email: "wijoko@example.com", Age: 1998, Score: 92 },
  { Name: "Ginanjar", Email: "ginanjar@example.com", Age: 1997, Score: 78 },
];

const result = calculateStudentData(students);
console.log(result);

//
