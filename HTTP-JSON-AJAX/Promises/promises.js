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

const userLeft = true
const userWatchingLoL = false

// function  learnCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if(userWatchingLoL){
//         errorCallback({
//             name:'User Warching LoL',
//             message:'JS < LOL'
//         })
//     } else{
//         callback('Learn!')
//     }
// };

// learnCallback((message)=>{
//     console.log('Success:'+ message)
// }, (error)=>{
//     console.log(error.name + ' ' + error.message)
// })



function  learnPromise(){
    return new Promise ((resolve, reject)=>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingLoL){
            reject({
                name:'User Warching LoL',
                message:'JS < LOL'
            })
        } else{
            resolve('Learn!')
        }
    })
};

learnPromise().then((message)=>{
    console.log('Success:'+ message)
}).catch((error)=>{
    console.log(error.name + ' ' + error.message)
})



const studyJS = new Promise((resolve,reject)=>{
    resolve('Studied JS')
})

const studyPthn = new Promise((resolve,reject)=>{
    resolve('Studied Pthn')
})

const studyAjax = new Promise((resolve,reject)=>{
    resolve('Studied Ajax')
});

Promise.all([
    studyJS,
    studyPthn,
    studyAjax
]).then((messages)=>{
    console.log(messages)
})

Promise.race([
    studyJS,
    studyPthn,
    studyAjax
]).then((message)=>{
    console.log(message)
})