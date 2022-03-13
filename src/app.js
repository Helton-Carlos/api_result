const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({path:'conf.env'})
const bodyParser = require("body-parser")
const router = require("./routes")
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.listen(process.env.PORT,()=>{
console.log(`Conexão porta ${process.env.PORT}`)
})