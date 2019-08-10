export function spinalCase(str) {
    return str.split(/[_\W]|(?=[A-Z])/).join('-').toLowerCase();
}