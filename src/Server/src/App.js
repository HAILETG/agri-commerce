const express =require('express')
const app =express()
require("./DBConnection/conn")
const port = process.env.PORT || 8000
const employeeRouter = require("./Router/employeeRoute")
var cors = require('cors')

app.use(cors()) 
app.use(express.json())
app.use(employeeRouter)

app.listen (port,()=>{
    console.log('connection is  setup at port ${port}')
})
