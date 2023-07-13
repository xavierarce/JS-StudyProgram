const numberPark = [[1,2],3,4,[5,6],[[[[7]]]],[[8],[9,10]]]
console.log(numberPark.flat(4))

console.log(numberPark.flatMap(number => number + 'H'))


useremail = '       xavie@email.com' 
useremail2 = 'xasxa@email.com      ' 


console.log(useremail.trimEnd())

users= [['Mile', 23],['Misde', 2332],['Msdsale', 3]] 
const obj = Object.fromEntries(users)