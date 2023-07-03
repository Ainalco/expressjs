const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const users=require("./models/users.model");

const app= express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/users",(req,res)=>{
    res.status(200).json({users});
});

//Home page
app.get("/",(req,res)=>{
    res.sendFile (__dirname+"/views/index.html");   
});

//route not found
app.use((req,res,next)=>{
    res.status(404).json({message:"route not Found"});
});

// server Error

app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something Went to Wrong!!"});
});

module.exports=app;