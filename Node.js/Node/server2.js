// import express from 'express';
import express from 'express';

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/:id',(req,res)=>{
    // console.log(req.query)
    // req.body
    // console.log(req.headers)
    console.log(req.params)
    res.status(404).send('notfound');
});



app.listen(3000)


// import  Express from "express";

// const app = Express()

// app.use((req,res,next)=>{
//     console.log('<h1>helooo</h1>')
//     next()
// })

// app.get('/', (req,res)=>{
//     res.send('testest')
// })

// app.listen(3000)

//app.use(express.urlencoded({extended: false}));
// app.use(express.json());