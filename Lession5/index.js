require('dotenv').config();
const express= require('express');
const app= express();
const PORT=process.env.PORT || 3001;

app.get("/",(req,res)=>{
    res.send(`<h3>Hello This Home</h3>`); 
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});