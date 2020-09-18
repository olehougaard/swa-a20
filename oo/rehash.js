let p = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() { return this.firstName + ' ' + this.lastName }
}

console.log(p.fullName()) // John Doe
let fn = p.fullName
console.log(fn()) // undefined undefined
console.log(fn.call(p)) // John Doe
fn = p.fullName.bind(p)
console.log(fn()) // John Doe
console.log()

function person(firstName, lastName) {
  return {
    getFirstName: () => firstName,
    setFirstName: (_firstName) => firstName = _firstName,
    getLastName: () => lastName,
    setLastName: (_lastName) => lastName = _lastName,
    fullName: () => firstName + ' ' + lastName
  }
}

p = person('John', 'Doe')
fn = p.fullName
console.log(fn()) // John Doe
console.log()

// Classic JavaScript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.fullName = function() { return this.firstName + ' ' + this.lastName }

p = new Person('John', 'Doe')
console.log(p.fullName())
console.log(Object.getPrototypeOf(p) === Person.prototype)
console.log(Object.getPrototypeOf(Person) !== Person.prototype)

function Employee(firstName, lastName, salary) {
  Person.call(this, firstName, lastName)
  this.salary = salary
}

Employee.prototype.raiseSalary = function(percentage) { this.salary = (1 + percentage / 100) * this.salary }
Object.setPrototypeOf(Employee.prototype, Person.prototype)

let e = new Employee('John', 'Doe', 10000)
console.log(e.fullName())
console.log(e instanceof Person)
console.log()

// Modern JavaScript - class
class CPerson {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

class CEmployee extends CPerson {
  constructor(firstName, lastName, salary) {
    super(firstName, lastName)
    this.salary = salary
  }
}

e = new CEmployee('John', 'Doe', 10000)

CEmployee.prototype.raiseSalary = function(percentage) { this.salary = (1 + percentage / 100) * this.salary }

e.raiseSalary(5)
console.log(e)
console.log()

// Fully dynamic: Monkey patching:
String.prototype.reverse = function() { return this.split('').reverse().join('') }

console.log('abcde'.reverse())

Number.prototype.pow = function(n) {
  let p = 1
  for (let i = 0; i < n; i++) {
    p *= this
  }
  return p
}
console.log((2).pow(4))
