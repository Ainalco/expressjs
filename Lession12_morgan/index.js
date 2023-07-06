const express= require('express');
const morgan =require("morgan");



const app= express();
const PORT=3000;

app.use(morgan("dev"));

app.get("/products",(req,res)=>{
    res.send("LIst All Products.");   
});

app.post("/products",(req,res)=>{
    res.status(201).send("Create Products.");   
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
  });