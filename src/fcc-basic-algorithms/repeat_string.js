export function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    }
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join('');
}