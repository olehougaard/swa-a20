let y = { a: 100, b: -50 }
let x = Object.create(y)

console.log(x.a)
console.log(Object.getPrototypeOf(x) === y)

let z = {}
Object.setPrototypeOf(z, y)
console.log(z.a)

y.a = 200
console.log(x.a)
console.log()
x.a = 300
console.log(x.a)
console.log(y.a)
console.log(z.a)

let adder = { 
  add() { return this.a + this.b } 
}

console.log()
Object.setPrototypeOf(y, adder)
console.log(y.add())
console.log(x.add())

// Constructors
function Adding(a, b) {
  this.a = a
  this.b = b
}
Adding.prototype = {
  add() { return this.a + this.b }
}

y = new Adding(200, -50)
console.log(y)
console.log(y instanceof Adding)
console.log(y.add())

console.log(Object.getPrototypeOf(y) === Adding.prototype)
console.log(Adding.prototype !== Object.getPrototypeOf(Adding))

// Employee extends Person
function Person(name, address) {
  this.name = name
  this.address = address
}
Person.prototype = {
  toString() { return `name: ${this.name}, address: ${this.address}` }
}

let p = new Person('Donald Duck', 'Ducksville')
console.log(p.toString())

function Employee(name, address, salary) {
  Person.call(this, name, address) // To make sure this is bound in the call to Person
  this.salary = salary
}
Employee.prototype = {
  getAnnualSalary() { return 12 * this.salary }
}

Object.setPrototypeOf(Employee.prototype, Person.prototype)

let e = new Employee('Donald Duck', 'Ducksville', 20000)
console.log(e.getAnnualSalary())
console.log(e.toString())
console.log(e)
