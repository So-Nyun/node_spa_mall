const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model/user")
const authMiddleware = require("./middleware/auth-middleware")

mongoose.connect("mongodb://localhost/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.post("/users", async (req, res) => {
    const {nickname, password, email, confirmPassword } = req.body

    if (password !== confirmPassword){
        res.status(400).send({
            errorMessage: "비밀번호가 일치하지 않습니다."
        })
        return;
    }

    const existUsers = await User.find({
        $or:  [{email}, {nickname}],
    })
    if (existUsers.length) {
        res.status(400).send({
            errorMessage: "같은 닉네임 또는 아이디가 존재합니다."
        })
        return;
    }
    const user = new User({ email, nickname, password})
    await user.save()

    res.status(201).send({

    })
})

router.post("/auth", async (req, res) => {
    const { email, password} = req.body
    
    const user = await User.findOne({ email, password}).exec()

    if (!user) {
        res.status(401).send({
            errorMessage: "아이디 또는 패스워드가 잘못됐습니다."
        })
        return;
    }

    const token = jwt.sign({ userId: user.userId},"secret-key")
    res.send({
        token,
    })
    
    router.get("/users/me", authMiddleware, async (req, res) => {
        const { user } = res.locals
        console.log(user)
        res.send({
            user: {
                email: user.email,
                nickname: user.nickname
            }
        })
    })
})

app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});