// Object Spread Operator

const array=[1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}
console.log(sum(...array))

////////////////


const animals = {
    lion:20,
    tiger:12,
    monkey:2,
    bird:1
}



function objectSpread(p1,p2,p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}


const {lion,tiger, ...rest} = animals
//rest

objectSpread(lion,tiger,rest)