const promise = new Promise((resolve,reject)=>{
    if(true){
        resolve('Stuffed Work')
    }else{
        reject('Error')
    }
})

const promise2 = new Promise((resolve,reject)=>{
setTimeout(resolve,100,'HIII')
})

const promise3 = new Promise((resolve,rejevt)=>{
setTimeout(resolve,1000,'Pokieee')
})

const promise4 = new Promise((resolve,rejevt)=>{
setTimeout(resolve,5000,'Its meee')
})

Promise.all([promise,promise2,promise3,promise4])
.then(values => console.log(values))

promise
.then(result=> result + '!')
.then(result2=> result2 + '?')
.catch(()=>console.log('Eroooor'))
.then(result3=> console.log(result3 + ('?')))