var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
})

app.get("/bye", function(req, res){
    res.send("Goodbye!");
})

app.get("/geralt", function(req, res){
    res.send("I love The Witcher!");
})

app.get("/r/:sadf", function(req, res){
    res.send("You are the star");
})

app.listen(3000, function(){
    console.log("Server has started on Port 3000");
})