const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.send("this is root folder and ")
})

router.get("/hello",(req,res) => {
    res.send("this is hello and ",req.originalUrl)
})

module.exports = router