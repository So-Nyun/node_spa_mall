const express = require("express")
const app = express()
const connect = require("") //connect db
const PORT = 3000 //basic value
///
const notice = require("")

connect()

const adminRouter = require("") //관리자페이지 접속 라우터

app.use(express.static("static"))
app.use(express.json())
app.use("/Api/admin",adminRouter)


app.get("/",(req,res) => {
    res.send("hello, home pages")
})

app.get("/Api/admin", (req, res) => {
    res.send("hello, api admin pages")
})

app.post("/Api/admin", (req, res) => {
    
})


