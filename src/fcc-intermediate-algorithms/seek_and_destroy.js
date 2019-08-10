export function destroyer(arr, ...values) {
    return arr.filter((num) => !values.includes(num));
}