export function binaryAgents(str) {
  let binaryArray = str.split(" ");
  let stringArray = binaryArray.map(val => String.fromCharCode(parseInt(val, 2)));
  return stringArray.join("");
}