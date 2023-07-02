const express= require('express');
const app= express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));
const users=[{
    name:"Ainal Haque",
    age:40
}];
const htmlform=`
<form method="POST" action="/user">
<input type="text" name="name" placeholder="Enter your Name"/>
<input type="number" name="age" placeholder="Enter your Age"/>
<button type="Submit">Save User</button>
</form>
`
app.get("/user",(req,res)=>{
    res.send(`<h3>Hello User</h3>`); 
});
app.post("/user",(req,res)=>{
    res.send(`<h3>Hello User</h3>`); 
});
app.use((req,res)=>{
    res.status(404).json({
        message:"Resource Not Found"
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});