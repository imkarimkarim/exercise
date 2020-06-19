const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/login", (req, res) =>{
    res.render("login");
})

app.post("/login", (req, res) =>{    
    if(req.body.username == "alireza" && req.body.password == "injast"){
        console.log(req.body.username + ", Loged in at: " + new Date());
        res.render("login", {login: "YESS"});
}   else{
    res.render("login", {login: "noooo"});
}

})

app.get("/api", (req, res) =>{
    res.json({Kaimr: "kairm", ali: "alir"});
})


app.listen(3000);