export function pairElements(str) {
    const pair = function(element) {
        switch (element) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
            default:
                return '';
        }
    }

    const elements = str.split('');
    let pairs = [];
    for (let element of elements) {
        pairs.push([element, pair(element)]);
    }
    return pairs;
}