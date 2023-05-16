const ejsMate = require("ejs-mate")
const express = require("express")
const path = require("path")
const mongoose = require("mongoose");

const app = express()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.engine("ejs",ejsMate)


app.listen(4600, ()=>{
    console.log("serving on port 4600")
})