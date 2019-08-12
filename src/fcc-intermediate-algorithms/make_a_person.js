export function Person(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = () => fullName.split(' ')[0];
  this.getFullName = () => fullName;
  this.getLastName = () => fullName.split(' ')[1];

  this.setFirstName = (first) => fullName = first + ' ' + fullName.split(' ')[1];
  this.setFullName = (newFullName) => fullName = newFullName;
  this.setLastName = (last) => fullName = fullName.split(' ')[0] + ' ' + last;
} 