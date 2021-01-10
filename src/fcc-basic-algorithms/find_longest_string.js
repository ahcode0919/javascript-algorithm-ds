export function findLongestWordLength(str) {
  let longest = 0;
  const words = str.split(' ');

  words.forEach((word) => {
    if (word.length > longest) {
      longest = word.length;
    }
  });

  return longest;
}
