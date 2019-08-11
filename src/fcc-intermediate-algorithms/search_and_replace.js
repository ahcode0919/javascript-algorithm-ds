export function myReplace(str, before, after) {
    const indexOfInsert = str.indexOf(before);
    const preInsert = str.slice(0, indexOfInsert);
    const postInsert = str.slice(indexOfInsert + before.length);
    
    if (/^[A-Z]/.test(before)) {
        const capitalizedAfter = after.charAt(0).toUpperCase() + after.slice(1);
        return [preInsert, capitalizedAfter, postInsert].join('');
    }
    
    return [preInsert, after, postInsert].join('');
}