const express= require('express');
const app= express();
const PORT=3001;
const bodyPerser=require('body-parser');
app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.get("/",(req,res)=>{
    //Usung Query Parameter
    //like url?id=10&name=Ainal
    // const sid=req.query.id;
    // const name=req.query.name;
    //distructuring way
    const {id,name}=req.query;
   res.send("Student id is:"+id+"-Name Is:"+name);   
});

app.get("/student/userid/:id/age/:age",(req,res)=>{
    //Usung Route Parameter
     //like url/userid/10/name/Ainal
    const sid=req.params.id;
    const age=req.params.age;
   res.send("Student id is:"+sid+"-Age Is:"+age);   
});

app.get("/class",(req,res)=>{
    //Usung Header Parameter on postman header like that
       const sid=req.headers.id;
    const name=req.headers.name;
   res.send("Student id is:"+sid+"-Name Is:"+name);   
});

app.post("/products",(req,res)=>{
    //Usung postman body row jason data and x-www-from urlencoded like that    
    const name=req.body.name;
    const id=req.body.id;
   res.send("Welcome :"+name+" Your ID:"+id);   
});

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");  
});
app.post("/register",(req,res)=>{
    const fullName=req.body.fullname;
    const email=req.body.email;
    res.send(`Your Name id:${fullName} and Email is: ${email}`);  
});



app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});