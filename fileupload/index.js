const express= require('express');
const multer  = require('multer')

const app= express();
const PORT=3000;



//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name=Date.now +"_"+file.originalname;
      cb(null, name);
    }
  })
  
  const upload = multer({ storage: storage })


app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html");   
});
app.post("/register",upload.single('image'),(req,res)=>{
    res.status(200).send("File is uploaded");   
});
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});