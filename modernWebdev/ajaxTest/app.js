const express = require("express");

const app = express();
app.use("/", express.static("public"));

app.get("/", (req, res) =>{
    res.sendfile("public/index.html");
});

app.get("/api", (req, res) =>{
    res.json({Kaimr: "kairm", ali: "alir"});
})

app.listen(3000);