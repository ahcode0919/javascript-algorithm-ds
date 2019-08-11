export function uniteUnique(...arr) {
    return arr.reduce((union, subArray) => {
        for (let num of subArray) {
            if (union.indexOf(num) === -1) {
                union.push(num);
            }
        }
        return union;
    }, []);
}