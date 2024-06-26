const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
        id:{
            type:Number,
            required:true,
            unique:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        barand:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        date:{
            type: Date,
             default: Date.now,
             required:true
        }
})

const products=mongoose.model('products',productSchema)
module.exports=products