const express= require('express');
const app= express();
const PORT=3000;

const firstMiddleware=(req,res,next)=>{
    console.log("Middleware Function");
    req.currentTime=new Date(Date.now());
    next();
}

//single use middleware
// app.get("/",firstMiddleware,(req,res)=>{
//     console.log("I am Home "+req.currentTime);
//     res.send(`<h3>Hello This Home</h3>`); 
// });

//for all method
app.use(firstMiddleware)

app.get("/",(req,res)=>{
    console.log("I am Home "+req.currentTime);
    res.send(`<h3>Hello This Home</h3>`); 
});

app.get("/about",(req,res)=>{
    console.log("I am About "+req.currentTime);
    res.send(`<h3>Hello This About</h3>`); 
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});