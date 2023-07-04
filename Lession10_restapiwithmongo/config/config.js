require("dotenv").config();


const dev={
    app:{
        port: process.env.PORT || 4000
    },
    db:{
        url: process.DB_URL || "mongodb://0.0.0.0:27017/userdb"
    }
}

module.exports=dev;