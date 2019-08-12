export function smallestCommons(arr) {
    const divisible = (target, low, high) => {
        for(let k = low; k <= high; k++) {
            if (target % k !== 0) {
                return false
            }
        }
        return true
    }

    let sortedNums = arr[0] < arr[1] ? arr.slice(0) : [arr[1], arr[0]];
    for (let i = sortedNums[1];; i += sortedNums[1]) {
        if (divisible(i, sortedNums[0], sortedNums[1])) {
            return i;
        }
    }
}
