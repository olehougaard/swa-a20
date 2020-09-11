// Deconstruction and spread in objects:
const o1 = {x: 100, y: 200}
const o2 = {y: 250, z: 300}
const {x, y} = o1 // Declares x, y and initializes them to o1.x and o1.y

const f = ({x, y}) => x + y
console.log(f(o1))

const o3 = {...o1, z: 300}
console.log(o3)

const o4 = {...o1, ...o2}
console.log(o4);

// Concatenative inheritance
function NPC(options) {
  function move(x, y) {
    console.log(`${options.name} moved to (${x}, ${y})`)
  }

  return {move}
}

function animal(options) {
  function poop() {
    console.log(`${options.name} pooped`)
  }

  return {poop}
}

function canine(options) {
  function bark() {
    console.log(`${options.name} barked`)
  }

  return {bark}
}

function murderer(options) {
  function kill(y) {
    console.log(`${options.name} killed ${y.name}`)
  }

  return {kill}
}

function robot(options) {
  function start() {
    console.log(`${options.name} started`)
  }

  return {start}
}

// Concatenation (aka. composition)
// Only getter for name (immutable)
function murderRobotDog(name) {
  const options = { name }
  return { ...NPC(options), ...robot(options), ...murderer(options), ...canine(options) }
  /*
  Alternative:
  return Object.assign ({}, NPC(options), robot(options), murderer(options), canine(options))
  */
}

// Alternative with public name
function murderRobotDog2(name) {
  const options = { name }
  Object.assign(options, NPC(options), robot(options), murderer(options), canine(options))
  return options
}

const mrd = murderRobotDog2('Fido')
mrd.bark()
mrd.name = 'Trofast'
mrd.bark()
