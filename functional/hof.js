// Higher-order functions

const pets = [
    {type: 'dog', name:'Fido'}, 
    {type: 'cat', name: 'Hannibal'}, 
    {type: 'dog', name: 'Rover'},
    {type: 'dragon', name: 'Fluffykins'}]

const names = pets => {
    let acc = []
    for(let p of pets) {
        acc.push(p.name) // p => p.name
    }
    return acc
}

const types = pets => {
    let acc = []
    for(let p of pets) {
        acc.push(p.type) // p => p.type
    }
    return acc
}

console.log(names(pets))
console.log(types(pets))

const map = (a, f) => {
    let acc = []
    for(let p of a) {
        acc.push(f(p))
    }
    return acc
}

console.log(map(pets, p => p.name))
console.log(map(pets, p => p.type))

const dogs = pets => {
    let acc = []
    for(let p of pets) {
        if (p.type === 'dog') // p => p.type === 'dog'
            acc.push(p)
    }
    return acc
}

const filter = (a, pred) => {
    let acc = []
    for(let p of a) {
        if (pred(p)) // p => p.type === 'dog'
            acc.push(p)
    }
    return acc
}

console.log(dogs(pets))
console.log(filter(pets, p => p.type === 'dog'))

const reduce = (a, f, init_value) => {
    let acc = init_value
    for(let p of a) {
        acc = f(acc, p)
    }
    return acc
}

const map1 = (a, f) => reduce(a, (acc, v) => [...acc, f(v)], [])
const filter1 = (a, p) => reduce(a, (acc, v) => p(v) ? [...acc, v] : acc, [])

console.log(reduce([1, 2, 3, 4], (acc, v) => acc + v, 0))
console.log(reduce([1, 2, 3, 4], (acc, v) => acc * v, 1))

console.log()
console.log(pets.map(p => p.type))
console.log(pets.filter(p => p.type === 'dog'))
console.log([1, 2, 3, 4].reduce((acc, v) => acc + v, 0))
console.log([1, 2, 3, 4].reduce((acc, v) => acc * v, 1))
