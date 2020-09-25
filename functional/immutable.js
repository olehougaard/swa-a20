// Mutable:
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() { return this.name }

    getAge() { return this.age }
}

class Company {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.employees = []
    }

    getName() { return this.name}

    getAddress() { return this.address}

    addEmployee(employee) { this.employees.push(employee) }

    removeEmployee(employee) {
        const index = this.employees.indexOf(employee)
        this.employees.splice(index, 1)
    }

    getEmployees() { return [...this.employees] }
}

// Immutable - OO
// Class
class ImmutableCompany {
    constructor(name, address, employees) {
        this.name = name
        this.address = address
        this.employees = [...employees]
    }

    getName() { return this.name}

    getAddress() { return this.address}

    addEmployee(employee) { 
        return new ImmutableCompany(this.name, this.address, [...this.employees, employee])
     }

    removeEmployee(employee) {
        return new ImmutableCompany(this.name, this.address, this.employees.filter(e => e !== employee))
    }

    getEmployees() { return [...this.employees] }
}

let company = new ImmutableCompany('VIA', 'Chr. M...', [])
company = company.addEmployee(new Person('Me', 51)) // x = f(x)

// Factory function
function immutable_company(name, address, _employees) {
    const employees = [..._employees]
    const getName = () => name
    const getAddress = () => address
    const getEmployees = () => [...employees]
    const addEmployee = employee => immutable_company(name, address, [...employees, employee])
    const removeEmployee = employee => immutable_company(name, address, employees.filter(e => e !== employee))
    return { getName, getAddress, getEmployees, addEmployee, removeEmployee }
}

// Data + functions
const create_company = (name, address, employees) => { name, address, employees }
const getName = c => c.name // optional
const addEmployee = 
    ({name, address, employees}, employee) => create_company(name, address, [...employees, employee])
const removeEmployee = 
    ({name, address, employees}, employee) => create_company(name, address, employees.filter(e => e !== employee))

const f = (x, y) => x + y
const curried_f = x => y => x + y // The curried version of f

const g = curried_f(2)
const h = curried_f(4)
console.log(g(2))
