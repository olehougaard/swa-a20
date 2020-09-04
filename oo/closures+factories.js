// Closures

function add(x) {
  function g(y) {
    return x + y
  }
  return g
}

let h = add(2) // the function g with x = 2 in its scope
console.log(h)
let hh = add(-1) // the function g with x = -1 in its scope

console.log(h(2))
console.log(hh(10))

// x works as a private "instance variable" for the function

// Factory function:
function adder(addend) {
  function getAddend() {
    return addend
  }
  function add(x) {
    return addend + x
  }

  // Long form: return { getAddend: getAddend, add: add }
  return { getAddend, add }
}

const a = adder(100)
console.log(a.getAddend())
console.log(a.add(17))

function log(f) {
  console.log(f())
}

log(a.getAddend)

// Steps
function name(firstName, lastName) { // 1.
  // (2) is here if needed - not this time
  // 3:
  const getFirstName = () => firstName
  const getLastName = () => lastName
  const getFullName = () => firstName + " " + lastName
  // 4:
  return { getFirstName, getLastName, getFullName }
}

const n = name("Ole", "Hougaard")
n.firstName = "Joe" // No effect
console.log(n.getFirstName())
log(n.getFullName)
