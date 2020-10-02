setTimeout(() => {
    console.log('Timeout')
}, 5000)

setTimeout(() => {
    console.log('Timeout2')
}, 0)

for(let i = 0; i < 1000000000; i++) {
    if (i === 999999999) console.log('Looped')
}

console.log('Main')




// Promises
function wait(delay, x) {
    return new Promise(
        resolve => setTimeout(() => resolve(x), delay)
    )
}
