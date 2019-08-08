export function findElement(arr, func) {
    for (let num of arr) {
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}