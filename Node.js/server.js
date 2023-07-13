// // import express from 'express';
// import express from 'express';

// const app = express()


// app.get('/',(req,res)=>{
//     res.send('getting root');
// });

// app.get('/profile',(req,res)=>{
//     res.send('getting profile');
// });


// app.post('/profile',(req,res)=>{
//     const user={
//         name: 'Sally',
//         age : 20
//     }
//     res.send(user);
// });

// app.listen(3000)


import  Express from "express";

const app = Express()

app.use((req,res,next)=>{
    console.log('<h1>helooo</h1>')
    next()
})

app.get('/', (req,res)=>{
    res.send('testest')
})

app.listen(3000)

//app.use(express.urlencoded({extended: false}));
// app.use(express.json());