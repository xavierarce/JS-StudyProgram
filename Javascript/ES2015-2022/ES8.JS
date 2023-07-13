// .padStart .padEnd
const name1 = 'Xavi'
console.log(name1.padStart(10,'*'));
console.log(name1.padEnd(10,'*'));

// Coma at the end
const fun = (
            a,
            b,
            c,
            d,
            f,
            ) => {
    console.log(a);
}

// keys, values,  entries

Object.values
Object.entries
Object.keys

let obj = {
   username0 : 'Santa',
   username1 : 'lel',
   username2 : 'lol'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key,obj[key], index); 
});

Object.values(obj).forEach(value => console.log(value))

Object.entries(obj).forEach(value => console.log(value))

Object.entries(obj).map(value=>{
    console.log(value[1], value[0].replace('',''));
})