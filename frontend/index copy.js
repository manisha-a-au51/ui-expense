const express = require("express");
const app1 = express();
var config = require('./config/config');
app1.set("view engine","ejs");
app1.use( express.static( "public" ) );
app1.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000
app1.get("/",(req,res)=>{
    res.render("Login", {utils: config})
})
app1.get("/about",(req,res)=>{
    res.render("about")
})
app1.get("/SignUp",(req,res)=>{
    res.render("SignUp",  {utils: config})
})
app1.get("/Login",(req,res)=>{
    res.render("Login", {utils: config})
})
app1.get("/home",(req,res)=>{
    res.render("Expenses", {utils: config})
})
app1.get("/analytics",(req,res)=>{
    res.render("Analytics", {utils: config})
})
app1.get("/password",(req,res)=>{
    res.render("password", {utils: config})
})

app1.listen(PORT, ()=>{console.log("port:3000")})
