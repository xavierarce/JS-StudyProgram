// Promise.allSettled vs Prosime.all

const promiseOne = new Promise((resolve,reject)=>
setTimeout(resolve,3000))
const promiseTwo = new Promise((resolve,reject)=>
setTimeout(reject,6000))

Promise.all([promiseOne,promiseTwo]).then(data=>console.log(data))
.catch(e=>console.log('Something Failed', e))

Promise.allSettled([promiseOne,promiseTwo]).then(data=>console.log(data))
.catch(e=>console.log('Something Failed!', e))