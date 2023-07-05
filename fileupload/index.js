const express= require('express');
const { default: mongoose } = require('mongoose');
const multer  = require('multer')

const app= express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT=3000;

//connecion to DB
const connecionDB= async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/UserTestDB");
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected");
        console.log(error);
        process.exit(1);
    }
};


//createing schema
const userSchema = new mongoose.Schema({
        name :{
            type :String,
            require: [true, "user name is required"]
        },
        image :{
            type :String,
            require: [true, "user Image is required"]
        }

});

//models
const User = mongoose.model("Users2",userSchema);


//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const name=Date.now()+"_"+file.originalname;
      cb(null, name);
    }
  });
  
  const upload = multer({ storage: storage })


app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html");   
});
app.post("/register",upload.single('image'), async (req,res)=>{
   try {
    const newUser= new User({
        name: req.body.name,
        image: req.file.filename
    });
    await newUser.save();
    res.status(201).send(newUser); 
   } catch (error) {
    res.status(500).send(error.message);
   }
      
});
app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connecionDB();
});