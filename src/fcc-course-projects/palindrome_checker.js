export function palindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .split(/[\W_]+/)
    .join('');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
