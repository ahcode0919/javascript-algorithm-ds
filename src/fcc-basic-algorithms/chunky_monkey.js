export function chunkArrayInGroups(arr, size) {
    let matrix = [];
    let index = 0;
    while (index < arr.length) {
        let tempArray = arr.slice(index, index + size);
        matrix.push(tempArray);
        index += size;
    }
    return matrix;
}