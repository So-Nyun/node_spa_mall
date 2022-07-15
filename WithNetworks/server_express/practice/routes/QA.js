const express = require("express")
const router = express.Router()
const db = require("")

router.post("/AP", async (req,res) => {
   const data = db.find() //프론트에서 받아옴
   
})

