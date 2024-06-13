const express=require('express')
const router=new express.Router()

const proiductController=require('../Controller/productController')

router.post('/add-product',proiductController.addProduct)
router.get('/get-allProduct',proiductController.getProduct)





module.exports= router