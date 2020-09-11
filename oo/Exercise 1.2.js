function point(x, y) {
  function getX() { return x } // Shown as an example, but be consistent.
  const getY = () => y
  const moveTo = (_x, _y) => {
    x = _x
    y = _y
  }
  const toString = () => `x = ${x}, y = ${y}`
  const copy = () => point(x, y)

  return { getX, getY, moveTo, toString, copy }
}

let p = point(100, 100)
console.log(p.toString())
p.moveTo(200, 200)
console.log(p.toString())

function circle(center, radius) {
  const getCenter = () => center
  const getRadius = () => radius
  const moveTo = (x, y) => center.moveTo(x, y)
  const toString = () => `center = ${center.toString()}, radius = ${radius}`

  return { getCenter, getRadius, moveTo, toString }
}

// b
const circles = [ circle(p, 100), circle(p, 200) ]
const radii = circles.map(c => c.getRadius())
console.log(radii)

// c
function log(x, y, z) {
  console.log(x)
  console.log(y)
  console.log(z)
}

log(2, 3, "dog")
log(3, "dog")
log(2, 3, "dog", "ignored")
// This means we cannot overload in the usual way

function circle_overloaded(arg1, arg2, arg3) {
  let center, radius
  if (arg3 === undefined) {
    center = arg1
    radius = arg2
  } else {
    center = point(arg1, arg2)
    radius = arg3
  }
  const getCenter = () => center
  const getRadius = () => radius
  const moveTo = (x, y) => center.moveTo(x, y)
  const toString = () => `center = ${center.toString()}, radius = ${radius}`

  return { getCenter, getRadius, moveTo, toString }
}

function circle_overloaded2(...args) {
  // Alternatively: Use the built-in arguments object
  let center, radius
  if (args.length < 2) {
    throw new Exception('Not enough')
  } else if (args.length == 2) {
    center = arg[0]
    radius = arg[1]
  } else {
    center = point(arg[0], arg[1])
    radius = arg[2]
  }
  const getCenter = () => center
  const getRadius = () => radius
  const moveTo = (x, y) => center.moveTo(x, y)
  const toString = () => `center = ${center.toString()}, radius = ${radius}`

  return { getCenter, getRadius, moveTo, toString }
}
