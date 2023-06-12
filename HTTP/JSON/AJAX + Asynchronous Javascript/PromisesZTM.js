const promise = new Promise((resolve,reject)=>{
    if(true){
        resolve('Stuffed Work')
    }else{
        reject('Error')
    }
})

promise
    .then(result=> result + '!')
    .then(result=> console.log(result))