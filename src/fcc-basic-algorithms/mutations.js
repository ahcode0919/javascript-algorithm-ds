export function mutation(arr) {
    if (arr[1].length > arr[0]) {
        return false;
    }

    for(let letter of arr[1].split('')) {
        let regex = new RegExp(`${letter}`, 'i');
        if (!regex.test(arr[0])) {
            return false;
        }
    }
    return true;
}