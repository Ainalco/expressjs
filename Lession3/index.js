const express= require('express');
const app= express();
const PORT=3000;
const bodyPerser=require('body-parser');
app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.get("/",(req,res)=>{
     res.sendFile(__dirname+"/index.html");   
});
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");   
});
app.post("/circle",(req,res)=>{
    const radius=req.body.radius;
    const circle=Math.PI*radius*radius;  
    res.send(`Radius of Circle is:${circle}`);    
});
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html");   
});
app.post("/triangle",(req,res)=>{
    const height=req.body.height; 
    const base=req.body.base;
    const area=0.5*base*height;  
    res.send(`Area of triangle is:${area}`);   
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});