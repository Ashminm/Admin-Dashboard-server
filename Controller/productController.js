const products=require('../Models/productModel')

exports.addProduct=async(req,res)=>{
    const {title,description,barand,category,price,image}=req.body
    try{
        const lastProduct = await products.findOne().sort({ id: -1 }).exec();
        const newId = lastProduct ? lastProduct.id + 1 : 1;

        const newProduct=await products({id:newId,title,description,barand,category,price,image})
        await newProduct.save()
        res.status(200).json(newProduct)
    }catch(err){
        res.status(401).json("Something want Wrong :"+ err)
        console.log(err);
    }
}

exports.getProduct=async(req,res)=>{
    try{
        const result =await products.find()
        res.status(200).json(result)
    }catch(err){
        res.status(401).json("Product fetch faild!!"+ err)
    }
}