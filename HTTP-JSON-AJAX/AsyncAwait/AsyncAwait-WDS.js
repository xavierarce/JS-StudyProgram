function makeRequest(location) {
    return new Promise((resolve,reject)=>{
        console.log(`Making requesto to  ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else{
            reject('We can only tanlk to Google')
        }
    })
}
 function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('facebook').then(response=>{
//     console.log('Responde Recieved')
//     return processRequest(response)
// }).then(processedResponse =>{
//     console.log(processedResponse)
// }).catch(err=>{
//     console.log(err)
// })

async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log('Responde Recieved')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)    
    } catch(err){
    console.log(err)
    }
    
}

doWork()