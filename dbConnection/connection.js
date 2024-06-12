const mongoose=require('mongoose')

const connectionString=process.env.DATA_BASE

mongoose.connect(connectionString).then((res)=>{
    console.log("Admin dashboard successfully connected with Atles..!");
}).catch((err)=>{
    console.log("Admin dashboard Connection faild: ",err);
})