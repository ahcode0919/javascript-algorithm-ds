export class Person {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
  }

  get firstName() {
    return this._firstName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get lastName() {
    return this._lastName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }
}
