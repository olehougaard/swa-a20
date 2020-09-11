class Person {
  constructor(name, address) {
    this.name = name
    this.address = address
  }
  toString() { return `name: ${this.name}, address: ${this.address}` }
}

let p = new Person('Donald Duck', 'Ducksville')
console.log(p.toString())

class Employee extends Person {
  constructor(name, address, salary) {
    super(name, address)
    this.salary = salary
  }

  getAnnualSalary() { return 12 * this.salary }
}

let e = new Employee('Donald Duck', 'Ducksville', 20000)
console.log()
console.log(e.getAnnualSalary())
console.log(e.toString())
console.log(e)
console.log()
console.log(typeof Person)
console.log(Person.prototype.toString)
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype)
console.log(e.constructor)

let f = e.getAnnualSalary
console.log(f())
