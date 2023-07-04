const User=require("../models/user.model");
const { v4: uuidv4 } = require('uuid');

const getAllUsers=(req,res)=>{
    res.status(200).json({message: "All Users"});
};



const createUsers=async(req,res)=>{
    try {
        console.log(req.body);
        const newUser=new User({
            id:uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
    });
    await newUser.save()
    res.status(201).json(newUser);  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOneUser=(req,res)=>{
    res.status(200).json({message: "One User"});
};

const updateUsers=(req,res)=>{
    res.status(200).json({message: "User is updated"});
};

const deleteUsers=(req,res)=>{
    res.status(200).json({message: "User is Deleted"});
};



module.exports={ getAllUsers,createUsers,getOneUser,updateUsers,deleteUsers };