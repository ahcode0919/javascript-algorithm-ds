export function mutation(arr) {
  if (arr[1].length > arr[0]) {
    return false;
  }

  for (const letter of arr[1].split('')) {
    const regex = new RegExp(`${letter}`, 'i');
    if (!regex.test(arr[0])) {
      return false;
    }
  }
  return true;
}
