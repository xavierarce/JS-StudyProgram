import Express  from "express";

const app = Express();
app.use(Express.static(process.cwd() + '/public'))

app.listen(3000)