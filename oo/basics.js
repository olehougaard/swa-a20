// Typeless
let i = 0

console.log(i)
console.log(i + 1)
console.log(2 * i)

i = "Zero"

console.log(i)
console.log(i + 1)
console.log(2 * i)

console.log(2 + "2")
console.log(2 * "2")
console.log(2 == "2")
console.log(2 === "2")

// Arrays
let a = [4, 2, 1198, "Hi"]
console.log(a.length)
console.log(a[2])

let b = [17, ...a] // Spread operator
console.log(b)
let [x, y, ...z] = a // Deconstruction
console.log(x, y, z)

// hashes
let h = { x: 4, y: 2}
console.log(h.x)
h = { "x": 4, "y": 2} // JSON
console.log(h.x)
console.log(h["y"])
h["z"] = 7
h.a = "Dog"
console.log(h)
delete h.x
console.log(h)

// Functions are 1st-class citizens
function f(x, y) {
  return x + y
}

console.log(f(2, 2))
console.log(f("2", "2"))

let g = f
console.log(g(2, 2))

let g1 = function(x, y) {
  return x + y
}
console.log(g1(2, 2))
let g2 = (x, y) => x + y
console.log(g2(2, 2))

// Basic objects
h = {x: 2, y: 3}
let sum = function() { return this.x + this.y }
h.sum = sum

console.log(sum())
console.log(h.sum())

const name = {
  firstName: "Ole",
  lastName: "Hougaard",
  fullName: function() { return this.firstName + " " + this.lastName }
}
console.log(name.fullName())
name.firstName = "Joe"
console.log(name.fullName())

function log(f) {
  console.log(f())
}

function four() { return 4 }
log(four)
log(name.fullName)

// bind
const boundFullName = name.fullName.bind(name)
log(boundFullName)
log(name.fullName.bind(name))

// Wrap in a function
log(() => name.fullName())

