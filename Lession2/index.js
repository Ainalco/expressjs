const express= require('express');
const app= express();
const PORT=3001;

app.get("/",(req,res)=>{
    // const sid=req.query.id;
    // const name=req.query.name;
    //distructureing way
    const {id,name}=req.query;
   res.send("Student id is:"+id+"-Name Is:"+name);   
});
//not works


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})