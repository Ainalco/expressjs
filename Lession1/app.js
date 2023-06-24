const express= require('express');
const userRouter=require('./routes/use.route');
const app= express();

app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html");    
});

app.get("/register",(req,res)=>{
    // res.status(200).json({
    //     "name":"Ainal",
    //     "message":"Hi i am Register Page",
    //     statusCode:200
    // });
    //res.redirect('/login');
    res.statusCode=200;
    res.sendFile(__dirname+"/views/register.html");
});

app.get("/login",(req,res)=>{
    //res.send("<h1>This is get Requiest at Login Router</h1>");
    // res.cookie("name","Kamal"); 
    // res.cookie("Age","25"); 
    res.clearCookie("name");
    res.append("id","54364");
    res.end(); 
});

app.use((req,res)=>{
    res.end("<h2> 404 Not a valid Url </h2>"); 
})


module.exports=app;