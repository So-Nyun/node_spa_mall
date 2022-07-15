const jwt = require("jsonwebtoken")

const token = jwt.sign({test: true}, 'secret-key')

console.log(token)