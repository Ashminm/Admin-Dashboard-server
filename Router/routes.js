const express=require('express')
const router=new express.Router()

const proiductController=require('../Controller/productController')

router.get('/allProduct',proiductController.getAllProduct)





module.exports= router