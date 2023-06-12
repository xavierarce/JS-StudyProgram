// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(Infinity))

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))
const greetingTogether = greeting.flatMap(x => x.join(' '))

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const arrayPutTogether = [...greeting[0], ...greeting[1], ...greeting[2]]
console.log(arrayPutTogether.join(" "));

const arrayPutTogether2 = greeting[0].concat(greeting[1], greeting[2])
console.log(arrayPutTogether2.join(" "));

console.log(greeting.flatMap(x => x.join(' ')).join(' '))

const alltogeter = greetingTogether.join(' ')
alltogeter

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity))


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const userEmail3Valid = userEmail3.trim()
console.log(userEmail3Valid)

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)
console.log(usersArray)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const usersIdBy2= usersArray.map(([a,b])=>
    [a,b*2]
)

usersIdBy2
//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const objUsersIdBy2 = Object.fromEntries(usersIdBy2)
objUsersIdBy2