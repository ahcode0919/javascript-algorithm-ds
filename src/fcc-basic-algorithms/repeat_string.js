export function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(str);
  }
  return arr.join('');
}
