const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
    res.render("index", {qs: req.query});
})

app.get("/singIn", (req, res) =>{
    res.render("signIn");
})

app.post("/sucsess", (req, res) =>{
    res.render("sucses", {data: req.body});
})

app.listen(3000);