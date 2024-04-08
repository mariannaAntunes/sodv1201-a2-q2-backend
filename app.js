const express = require('express')
const app = express()
const regRoutes = require('./routes/regRoutes')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// convert json to javascript object and put into request body
app.use(express.json())

app.use(regRoutes)

app.listen(7000, ()=>{
    console.log('server is running........')
})