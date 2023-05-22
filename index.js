const ejsMate = require("ejs-mate")
const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"))
app.engine('ejs',ejsMate)

app.get('/',(req,res)=>{
    res.render("home")
})
app.listen(4600, ()=>{
    console.log("serving on port 4600")
})