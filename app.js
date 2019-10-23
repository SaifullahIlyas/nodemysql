const express = require("express");
const app = express();


const userrouts = require("./api/routes/users");
app.use("/users",userrouts);
//helo

//console.log("app called")
module.exports = app;