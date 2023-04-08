const express = require("express");
const app1 = express();

app1.set("view engine","ejs");
app1.use( express.static( "public" ) );
app1.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT
app1.get("/",(req,res)=>{
    res.render("Login")
})
app1.get("/about",(req,res)=>{
    res.render("about")
})
app1.get("/SignUp",(req,res)=>{
    res.render("SignUp")
})
app1.get("/Login",(req,res)=>{
    res.render("Login")
})
app1.get("/home",(req,res)=>{
    res.render("Expenses")
})
app1.get("/analytics",(req,res)=>{
    res.render("Analytics")
})
app1.get("/password",(req,res)=>{
    res.render("password")
})

app1.listen(PORT)
