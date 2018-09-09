var express = require("express");
var app = express();

//  "/" => "Hi there!"
app.get("/", function(req,res){
    res.send("Hi there!");
});


// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
   res.send("Goodbye!"); 
});

// "/dog" => "MEOW!"
app.get("/dog",function(req,res){
    console.log("Someone made a request to /dog")
   res.send("MEOW!"); 
});


app.get("/r/:subredditName", function(req, res){
   var subreddit = req.params.subredditName;
   res.send(`Welcome to the ${subreddit} subreddit!`);
});


app.get("*", function(req,res){
   res.send("You are a star!"); 
});

// Tell express to listen for request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has start");
});