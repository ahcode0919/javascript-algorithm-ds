export function titleCase(str) {
    let capitalizedWords = str.toLowerCase()
        .split(' ')
        .map((word) => {
            return word.replace(/^\w/, (char) => {
                return char.toUpperCase();
            });
        });
    return capitalizedWords.join(' ');
}