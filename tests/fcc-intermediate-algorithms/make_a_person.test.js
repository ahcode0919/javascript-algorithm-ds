import { Person } from "../../src/fcc-intermediate-algorithms/make_a_person";

test('should make a person', () => {
  let person = new Person("Bob Ross");
  expect(person.getFullName()).toBe("Bob Ross");
});

test('should get first name', () => {
  let person = new Person("Bob Ross");
  expect(person.getFirstName()).toBe("Bob");
});

test('should get last name', () => {
  let person = new Person("Bob Ross");
  expect(person.getLastName()).toBe("Ross");
});

test('should set first name', () => {
  let person = new Person("Bob Ross");
  person.setFirstName("Mike");
  expect(person.getFullName()).toBe("Mike Ross");
});

test('should set last name', () => {
  let person = new Person("Bob Ross");
  person.setLastName("Jones");
  expect(person.getFullName()).toBe("Bob Jones");
});

test('should set full name', () => {
  let person = new Person("Bob Ross");
  person.setFullName("Ross Bob");
  expect(person.getFullName()).toBe("Ross Bob");
});