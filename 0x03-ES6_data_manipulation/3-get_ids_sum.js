export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
