
const express = require("express");
const router = express.Router();

router.get("/",(request,response,next) => {

response.status(200).json({
    message:'hello my first user rout'
})

})
module.exports=router;
