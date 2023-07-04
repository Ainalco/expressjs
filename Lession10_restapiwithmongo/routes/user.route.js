const { getAllUsers,getOneUser,createUsers } = require("../controllers/user.controller");
const router=require("express").Router();

//ainal1haque
//EiBxFvjD4GHpQAz1
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUsers);



module.exports=router;