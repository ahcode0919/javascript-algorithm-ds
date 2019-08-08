export function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    }
    return str.substring(0, num) + '...';
}