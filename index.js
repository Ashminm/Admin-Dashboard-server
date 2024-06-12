require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./dbConnection/connection')
const route=require('./Router/routes')

const dashboard=express()

dashboard.use(cors())
dashboard.use(express.json())
dashboard.use(route)

const PORT=4000 || process.env.PORT

dashboard.listen(PORT,()=>{
    console.log(`Server Start:`,PORT);
})
dashboard.get('/',(req,res)=>{
    res.send("<h2>Server is Running....... Let's Start!!</h2>")
})
// dashboard.post('/',(req,res)=>{
//     res.send("<h2>Request Receved!!</h2>")
// })
