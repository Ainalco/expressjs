const express= require('express');
const router=express.Router();



router.get("/about",(req,res)=>{
    res.send("This is get Requiest at About Router");
    res.end();    
});

router.post("/contact",(req,res)=>{
    res.send("This is post Requiest at Contact Router");    
    res.end(); 
});

router.put("/contact",(req,res)=>{
    res.send("This is Put Requiest at Contact Router"); 
    res.end();    
});

router.delete("/user",(req,res)=>{
    res.send("This is Delete Requiest at User Router");
    res.end();     
});


module.exports=router;