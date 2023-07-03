const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id:uuidv4(),
        username: "Ainal Haque",
        email: "ainal@gmail.com",
    },
    {
        id:uuidv4(),
        username: "Jamil Hossain",
        email: "jamal@gmail.com",
    },
];

module.exports = users;