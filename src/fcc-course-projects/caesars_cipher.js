export function rot13(str) {
  // A = 0 , Z = 25
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let decoded = [];
  for (let i = 0; i < str.length; i += 1) {
    if (/\W/.test(str[i])) {
      decoded.push(str[i]);
      continue;
    }
    const startIndex = alphabet.indexOf(str[i]);
    const newIndex = startIndex + 13 <= 25 ? startIndex + 13 : (startIndex + 13) - 26;
    decoded.push(alphabet[newIndex]);
  }
  return decoded.join('');
}