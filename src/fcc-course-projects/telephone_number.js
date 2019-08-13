export function telephoneCheck(str) {
  return /^(1 ?)?(\([0-9]{3}\)|[0-9]{3})[ \-]?[0-9]{3}[ \-]?[0-9]{4}$/.test(str);
}