import fs from 'fs';

const filePath = './day1.txt';


function question2(){
fs.readFile(filePath,'utf-8',(err,data)=>{
    console.time('a')
    const directionsArray = data.split('');
    let acc = 0
    let counter = 0
    const answer =  directionsArray.some((currentItem)=>{
    if( currentItem === ('(')){
        acc += 1
    } else if ( currentItem === (')')){
        acc -= 1
    }
    counter ++
    return acc < 0; 
    })
console.timeEnd('a')
console.log(counter + 'Was basement entered')
})
}

question2()