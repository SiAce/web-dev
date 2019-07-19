var express = require("express");
var app = express();

app.use(express.static("public"));

/*
if this line of code is used, we can shorten 
res.render("home.ejs") to be res.render("home") 
*/
// app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/fuck/:you", function(req, res){
    var thing = req.params.you;
    res.render("fuck.ejs", {thingVar: thing});
})

app.listen(3000, function(){
    console.log("Server is starting at port 3000!");
})