import { Person } from '../../src/fcc-intermediate-algorithms/make_a_person';

test('should make a person', () => {
  const person = new Person('Bob', 'Ross');
  expect(person.fullName).toBe('Bob Ross');
});

test('should get first name', () => {
  const person = new Person('Bob', 'Ross');
  expect(person.firstName).toBe('Bob');
});

test('should get last name', () => {
  const person = new Person('Bob', 'Ross');
  expect(person.lastName).toBe('Ross');
});

test('should set first name', () => {
  const person = new Person('Bob', 'Ross');
  person.firstName = 'Mike';
  expect(person.fullName).toBe('Mike Ross');
});

test('should set last name', () => {
  const person = new Person('Bob', 'Ross');
  person.lastName = 'Jones';
  expect(person.fullName).toBe('Bob Jones');
});
