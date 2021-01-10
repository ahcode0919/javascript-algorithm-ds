export function largestOfFour(arr) {
  const largest = [];
  for (const subArray of arr) {
    if (subArray.length == 0) {
      continue;
    }
    largest.push(Math.max(...subArray));
  }
  return largest;
}

export function largestOfFour2(arr) {
  const largest = [];
  for (const subArray of arr) {
    if (subArray.length == 0) {
      continue;
    }
    let largestNumber = subArray[0];
    for (let i = 1; i < subArray.length; i += 1) {
      if (subArray[i] > largestNumber) {
        largestNumber = subArray[i];
      }
    }
    largest.push(largestNumber);
  }
  return largest;
}
