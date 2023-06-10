// let p =  new Promise((resolve,reject)=>{
//     let a = 1+2
//     if (a==2){
//         resolve('Succes')
//     }else {
//         reject('Failed')
//     }
// });

// p.then((message)=>{
//     console.log('This is in the then '+ message)
// }).catch((message)=>{
//     console.log('This is in the catch '+message)
// })

const userLeft = false
const userWatchingLoL = false

function  learnCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if(userWatchingLoL){
        errorCallback({
            name:'User Warching LoL',
            message:'JS < LOL'
        })
    } else{
        callback('Learn!')
    }
};

learnCallback((message)=>{
    console.log('Success:'+ message)
}, (error)=>{
    console.log(error.name + ' ' + error.message)
})