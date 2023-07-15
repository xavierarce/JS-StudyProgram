import fs from 'fs';

fs.readFile('./hello.txt',(err,data)=>{
    if (err){
        console.log('err')
    }
    console.log('Async', data.toString('utf-8'))
})

const file= fs.readFileSync('./hello.txt')
console.log('Sync',file.toString())


    // APPEND
    // fs.appendFile('./hello.txt', ' This is so cool', err=>{
    //     if(err){
    //         console.log('errrroor')
    //     }
    // })

    // WRITE    
// fs.writeFile('./bye.txt','sad see 2 u go',err=>{
//     if(err){console.log(err)}
// })

    //Delete

fs.unlink('./bye.txt',err=>{
    if(err){
        console.log(err)
    }
    console.log('INCEPTION')
})