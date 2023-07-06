const express= require('express');
const {body, validationResult}=require("express-validator");
const app= express();
const PORT=3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/test",(req,res)=>{
    res.send("Test this server");   
});

app.get("/api/register",(req,res)=>{
    res.send("Test this server");   
});

app.post("/api/register",
//input validator
body("name").trim().notEmpty().withMessage("Name is missing")
.isLength({min:5}).withMessage("Name Length is minimum 5 Character"),
(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
},


(req,res)=>{
    try {
        const {name,email,password,dob}=req.body;
        const newUser={
            name, 
            email, 
            password, 
            dob
        }
        return res.status(201).json({
            message:"Usr was Created",
            newUser
        }); 
    } catch (error) {
        return res.json({
            message:error.message
        });
        
    }  
});



app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);   
});