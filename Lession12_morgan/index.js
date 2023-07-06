const express= require('express');
const morgan =require("morgan");
const chalk =require("chalk");


//if install previous version then like: npm install chalk@^4.1.2
const app= express();
const PORT=3000;

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.error(error("This is an erroe"));

console.log(warning("This is an log"));

app.use(morgan("dev"));

app.get("/products",(req,res)=>{
    res.send("LIst All Products.");   
});

app.post("/products",(req,res)=>{
    res.status(201).send("Create Products.");   
});

app.get("/category",(req,res)=>{
    res.send("LIst All Category.");   
});

app.post("/category",(req,res)=>{
    res.status(201).send("Create Category.");   
});

app.listen(PORT, ()=>{
    console.log(chalk.underline.bgRed.bold(`Server is running at http://localhost:${PORT}`));
  });