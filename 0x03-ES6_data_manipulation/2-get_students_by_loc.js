export default function getStudentsByLocation(arr, city) {
  const filt = arr.filter((item) => item.location === city);
  return filt;
}
