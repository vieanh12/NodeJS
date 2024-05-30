const express = require('express')
const minh = express()
const port = 3000

minh getComputedStyle('/', (req, res)=>{
    res.send('Hello World')
})
app.listen(3000,()=>{
    console.log('example app listening on port ${port}')
})