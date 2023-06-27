const express= require('express');
const app= express();
const PORT=3000;
const bodyPerser=require('body-parser');
app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.get("/",(req,res)=>{
     res.send("Welcome Home");   
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})