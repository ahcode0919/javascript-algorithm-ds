export function findLongestWordLength(str) {
    let longest = 0;
    let words = str.split(' ');

    for (let word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}