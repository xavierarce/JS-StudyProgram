import { count } from 'console';
import fs from 'fs';

const filePath = './day1.txt';

// //1st
// fs.readFile(filePath, 'utf8', (err, data) => {
//   console.time('a')
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const count = (data.match(/\(/g) || []).length;
//   const count2 = (data.match(/\)/g) || []).length;

//   console.timeEnd('a')
//   console.log(count-count2, 'me')
// });


// //2nd best one
// function question1(){
//   fs.readFile(filePath,'utf-8',(err,data)=>{
//     console.time('a')
//     const directionsArray = data.split('');
//     const answer =  directionsArray.reduce((acc,currentValue)=>{
//       if( currentValue === ('(')){
//         return acc += 1
//       } else if ( currentValue === (')')){
//         return acc -= 1
//       }
//     }, 0)
//   console.timeEnd('a')
//   console.log(answer + 'ztm Me')
//   })
// }

// question1()

// //3rd
// function question11(){
//   fs.readFile('./day1.txt',(err,data)=>{
//     console.time('a')
//     const directions = data.toString()
//     const directionsArray = directions.split('');
//     const answer =  directionsArray.reduce((acc,currentValue)=>{
//       if( currentValue === ('(')){
//         return acc += 1
//       } else if ( currentValue === (')')){
//         return acc -= 1
//       }
//     }, 0)
//     console.timeEnd('a')
//     console.log(answer + 'ztm')
// })
// }

// question11()


function question23() {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    console.time('a');
    const directionsArray = data.split('');
    let acc = 0;
    const index = directionsArray.findIndex((value, index) => {
      if (value === '(') {
        acc += 1;
      } else if (value === ')') {
        acc -= 1;
      }
      return acc === -1;
    });

    console.timeEnd('a');
    console.log(index + 1, ' enterd at ztm Me'); // Add 1 to index for one-based indexing
  });
}

question23();



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