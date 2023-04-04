const express = require('express')
const app=express()
const mongoose = require('mongoose')
const PORT=5000
const {MONGOURI} =require('./keys')
require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))
mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting ",err)
})
//middleware modifies the request before reaching to its actual rote handler
//used when someone want to access protected resource

app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)
})