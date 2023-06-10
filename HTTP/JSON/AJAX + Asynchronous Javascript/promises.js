let p =  new Promise((resolve,reject)=>{
    let a = 1+1
    if (a==2){
        resolve('Succes')
    }else {
        reject('Failed')
    }
})