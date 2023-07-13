//.Finally

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url=>{
    return fetch(url).then(people=> people.json())
}))
.then(array=>{
console.log('1',array[0]),
console.log('2',array[1]),
console.log('3',array[2]),
console.log('4',array[3])
})
.catch(err => console.log('EROOR', err))
.finally(()=>console.log('Extra'));


// For Await of

const urls2 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(urls2.map(url=>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users',users)
        console.log('posts',posts)
        console.log('albums',albums)    
    }catch(err){
        console.log('oopaaa',err)
    }
}

// const loopThroughUrl =  url=> {
//     for(url of urls2){
//         console.log(url)
//     }
// }
// loopThroughUrl(urls2)

const getData2 = async function(){
    const arrayOfPromises = urls2.map(url=>fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data)
    }
};

getData2()