const express= require('express');
const app= express();
const PORT=3001;


app.get("/products/:id([0-9]{3})",(req,res)=>{
    res.send(`<h3>ID=${req.params.id}</h3>`); 
});

app.get("/products/:title([a-zA-Z0-9]+)",(req,res)=>{
    res.send(`<h3>Title=${req.params.title}</h3>`); 
});

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"Not a Valid Route"
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});