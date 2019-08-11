export function fearNotLetter(str) {
    if ((str.charCodeAt(str.length - 1) - str.charCodeAt(0)) + 1 === str.length) {
        return undefined;
    }

    for (let i = 0; i < str.length - 1; i++) {
        const currentCharCode = str.charCodeAt(i);
        if (currentCharCode + 1 !== str.charCodeAt(i + 1)) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }

    return undefined;
}