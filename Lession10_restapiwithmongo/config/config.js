require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://0.0.0.0:27017/userDemoDB",
  },
};

module.exports = dev;