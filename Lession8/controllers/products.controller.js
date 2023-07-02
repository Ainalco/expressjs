const path=require("path");
const products=require("../models/products.model");

exports.getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname +"/../views/product.html")); 
};

exports.saveProducts=(req,res)=>{
    const name=req.body.name;
    const model=req.body.model;
    const product=
        {
            name,
            model
        };
        products.push(product);
        res.status(201).json({
            success:true,
            products,
        });
};