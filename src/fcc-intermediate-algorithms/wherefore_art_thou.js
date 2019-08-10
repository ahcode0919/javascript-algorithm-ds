export function whatIsInAName(collection, source) {
    return collection.filter((obj) => {
        for(let key in source) {
            if (obj[key] !== source[key]) {
                return false;
            }
        }
        return true;
    });
}