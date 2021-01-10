export function confirmEnding(str, target) {
  return str.substring(str.lastIndexOf(target)) === target;
}
