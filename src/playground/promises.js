const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data')
        reject('This is my other reject data')
    }, 5000)
})

console.log('Before')

promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
    console.error(error)
})

promise.then((data) => {
    console.log('2', data)
}, (error) => {
    console.error(error)
})

console.log('After')