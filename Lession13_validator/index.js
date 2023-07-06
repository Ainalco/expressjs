const express= require('express');
const userRoutes = require('./routes/user');
const app= express();
const PORT=3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/api",userRoutes);


app.get('/test', (req, res) => {
  res.send('testing the server');
});







app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);   
});